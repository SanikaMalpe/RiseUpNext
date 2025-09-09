import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Container,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Avatar,
  Divider,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  AttachMoney as MoneyIcon,
  Event as EventIcon,
  Notifications as BellIcon,
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Group as GroupIcon,
  Star as StarIcon,
} from '@mui/icons-material';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login');
      return;
    }

    try {
      setUser(JSON.parse(userData));
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const getRoleBasedContent = () => {
    switch (user?.role) {
      case 'student':
        return {
          title: 'Student Dashboard',
          subtitle: 'Track your progress and connect with mentors',
          cards: [
            {
              title: 'My Projects',
              description: 'View and manage your startup projects',
              icon: <BusinessIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
              color: '#e3f2fd',
              action: 'View Projects'
            },
            {
              title: 'Mentor Connections',
              description: 'Connect with experienced mentors in your field',
              icon: <GroupIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
              color: '#e8f5e8',
              action: 'Find Mentors'
            },
            {
              title: 'Learning Resources',
              description: 'Access educational materials and courses',
              icon: <SchoolIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
              color: '#fff3e0',
              action: 'Browse Resources'
            },
            {
              title: 'Funding Opportunities',
              description: 'Discover funding options for your startup',
              icon: <MoneyIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
              color: '#f3e5f5',
              action: 'Explore Funding'
            }
          ]
        };
      case 'investor':
        return {
          title: 'Investor Dashboard',
          subtitle: 'Discover and evaluate investment opportunities',
          cards: [
            {
              title: 'Startup Portfolio',
              description: 'Browse student startups seeking investment',
              icon: <BusinessIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
              color: '#e3f2fd',
              action: 'Browse Startups'
            },
            {
              title: 'Due Diligence',
              description: 'Review business plans and financials',
              icon: <AssignmentIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
              color: '#e8f5e8',
              action: 'Review Plans'
            },
            {
              title: 'Mentor Network',
              description: 'Connect with other investors and mentors',
              icon: <GroupIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
              color: '#fff3e0',
              action: 'Network'
            },
            {
              title: 'Investment History',
              description: 'Track your investment portfolio',
              icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
              color: '#f3e5f5',
              action: 'View Portfolio'
            }
          ]
        };
      case 'admin':
        return {
          title: 'Admin Dashboard',
          subtitle: 'Manage platform operations and user activities',
          cards: [
            {
              title: 'User Management',
              description: 'Manage users, roles, and permissions',
              icon: <PersonIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
              color: '#e3f2fd',
              action: 'Manage Users'
            },
            {
              title: 'Platform Analytics',
              description: 'View platform statistics and insights',
              icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
              color: '#e8f5e8',
              action: 'View Analytics'
            },
            {
              title: 'Content Management',
              description: 'Manage events, resources, and announcements',
              icon: <EventIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
              color: '#fff3e0',
              action: 'Manage Content'
            },
            {
              title: 'System Settings',
              description: 'Configure platform settings and preferences',
              icon: <DashboardIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
              color: '#f3e5f5',
              action: 'Settings'
            }
          ]
        };
      default:
        return {
          title: 'Dashboard',
          subtitle: 'Welcome to your personalized dashboard',
          cards: []
        };
    }
  };

  if (!user) {
    return null;
  }

  const roleContent = getRoleBasedContent();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)' }}>
        <Toolbar>
          <TrendingUpIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RISEUPNEXT
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Avatar sx={{ mr: 1, bgcolor: 'rgba(255,255,255,0.2)' }}>
              <PersonIcon />
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                {user.name}
              </Typography>
              <Chip 
                label={user.role} 
                size="small" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  fontSize: '0.7rem',
                  height: 20
                }} 
              />
            </Box>
          </Box>
          <Button
            color="inherit"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={{ ml: 2 }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Welcome Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Welcome back, {user.name}! 👋
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            {roleContent.subtitle}
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Box>

        {/* Quick Stats */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <StarIcon sx={{ fontSize: 40, color: '#ff9800', mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#ff9800' }}>
                12
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active Projects
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <GroupIcon sx={{ fontSize: 40, color: '#4caf50', mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#4caf50' }}>
                8
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Connections
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <EventIcon sx={{ fontSize: 40, color: '#9c27b0', mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#9c27b0' }}>
                5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Upcoming Events
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <BellIcon sx={{ fontSize: 40, color: '#1976d2', mb: 1 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#1976d2' }}>
                3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                New Notifications
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Role-Based Cards */}
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
          {roleContent.title}
        </Typography>
        
        <Grid container spacing={3}>
          {roleContent.cards.map((card, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ mr: 2 }}>
                      {card.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {card.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    size="small"
                    sx={{
                      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                      },
                    }}
                  >
                    {card.action}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Activity */}
        <Paper sx={{ mt: 4, p: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Recent Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.role === 'student' && 'Your mentor John Doe reviewed your business plan and provided feedback.'}
            {user.role === 'investor' && 'New startup "TechFlow" submitted their pitch deck for review.'}
            {user.role === 'admin' && '5 new users registered today. 3 students, 1 investor, 1 mentor.'}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Dashboard;
