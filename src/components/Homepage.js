import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Card,
  CardContent,
  IconButton,
  Paper,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Person as PersonIcon,
  Star as StarIcon,
  Schedule as ScheduleIcon,
  AttachMoney as MoneyIcon,
  CheckCircle as CheckIcon,
  People as PeopleIcon,
  Notifications as BellIcon,
  Event as EventIcon,
  Business as BusinessIcon,
  Security as SecurityIcon,
  School as SchoolIcon,
  Handshake as HandshakeIcon,
  TrendingUp as TrendingUpIcon2,
  DocumentScanner as DocumentIcon,
  Forum as ForumIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <AppBar position="fixed" sx={{ background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <TrendingUpIcon sx={{ color: '#1976d2', mr: 1, fontSize: 32 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #1976d2 0%, #ff9800 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              RISEUPNEXT
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Button color="inherit" sx={{ color: '#333', fontWeight: 500 }}>
                Home
              </Button>
              <Button color="inherit" sx={{ color: '#333', fontWeight: 500 }}>
                About
              </Button>
              <Button color="inherit" sx={{ color: '#333', fontWeight: 500 }}>
                Services
              </Button>
              <Button color="inherit" sx={{ color: '#333', fontWeight: 500 }}>
                Contact us
              </Button>
              <Button
                variant="outlined"
                onClick={handleLogin}
                sx={{
                  borderColor: '#1976d2',
                  color: '#1976d2',
                  fontWeight: 600,
                  mr: 1,
                  '&:hover': {
                    borderColor: '#1565c0',
                    backgroundColor: 'rgba(25, 118, 210, 0.04)',
                  },
                }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                onClick={handleSignUp}
                sx={{
                  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                  color: 'white',
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                  },
                }}
              >
                SignUp
              </Button>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{ color: '#333' }}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <Box sx={{ background: 'white', py: 2, px: 2 }}>
            <Button fullWidth color="inherit" sx={{ color: '#333', justifyContent: 'flex-start', mb: 1 }}>
              Home
            </Button>
            <Button fullWidth color="inherit" sx={{ color: '#333', justifyContent: 'flex-start', mb: 1 }}>
              About
            </Button>
            <Button fullWidth color="inherit" sx={{ color: '#333', justifyContent: 'flex-start', mb: 1 }}>
              Services
            </Button>
                         <Button fullWidth color="inherit" sx={{ color: '#333', justifyContent: 'flex-start', mb: 1 }}>
               Contact us
             </Button>
             <Button
               fullWidth
               variant="outlined"
               onClick={handleLogin}
               sx={{
                 borderColor: '#1976d2',
                 color: '#1976d2',
                 fontWeight: 600,
                 justifyContent: 'flex-start',
                 mb: 1,
               }}
             >
               Sign In
             </Button>
             <Button
               fullWidth
               variant="contained"
               onClick={handleSignUp}
               sx={{
                 background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                 color: 'white',
                 fontWeight: 600,
                 mt: 1,
               }}
             >
               SignUp
             </Button>
          </Box>
        )}
      </AppBar>

      {/* Hero Section */}
      <Box
  sx={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(255, 152, 0, 0.1) 100%)',
    backgroundImage: 'url("https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  }}
>
  {/* Black overlay for better text visibility */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // 40% black overlay
      zIndex: 1,
    }}
  />
  
  {/* Content with proper z-index */}
  <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            mb: 3,
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)', // Enhanced text shadow
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          Ready to Fuel Your Startup Journey with Mentor Support and Funds?
        </Typography>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Typography
          variant="h5"
          sx={{
            color: 'white',
            textAlign: 'center',
            mb: 4,
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)', // Enhanced text shadow
            fontWeight: 400,
          }}
        >
          Expertly Matching Professionals with Opportunity
        </Typography>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleSignUp}
            sx={{
              background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
              color: 'white',
              fontSize: '1.2rem',
              px: 4,
              py: 2,
              fontWeight: 600,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', // Added shadow for better visibility
              '&:hover': {
                background: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(25, 118, 210, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Explore
          </Button>
        </Box>
      </motion.div>
    </motion.div>
  </Container>
</Box>


      {/* Key Value Propositions */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <StarIcon sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  Right Talent
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Connect visionary student founders with seasoned mentors to drive innovation and accelerate growth.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <ScheduleIcon sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  Right Time
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Access mentorship and funding precisely when needed, accelerating your journey from idea to impact.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div variants={itemVariants}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <MoneyIcon sx={{ fontSize: 60, color: '#ff9800', mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  Right Cost
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Connect with mentors and secure resources efficiently, making every investment count towards success.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Our Features Section */}
      <Box sx={{ background: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Our Features
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: 'text.secondary',
                  mb: 6,
                  maxWidth: 800,
                  mx: 'auto',
                }}
              >
                Designed to simplify mentorship, funding access, and startup visibility, RiseUpNext fuels the next generation of innovators to turn their visions into successful ventures.
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PersonIcon sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Student Startup Registration & Profiles
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                    Students can showcase their innovative ideas and ventures with good profiles that highlight their vision, progress, and potential.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CheckIcon sx={{ fontSize: 40, color: '#4caf50', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Mentor & Investor Matching
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Connect startups with verified mentors and investors who provide valuable insights, guidance, and financial support.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <PeopleIcon sx={{ fontSize: 40, color: '#ff9800', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Flexible Talent & Resource Scaling
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Scale your teams with access to skilled talent and resources, enabling rapid growth and development of your startup.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, height: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <BellIcon sx={{ fontSize: 40, color: '#9c27b0', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Event Announcements & Real-Time Notifications
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Stay informed about hackathons, pitch competitions, funding deadlines, and networking opportunities with instant notifications.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)', py: 6, color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ textAlign: 'center' }}>
            <Grid item xs={6} md={3}>
              <motion.div variants={itemVariants}>
                <HandshakeIcon sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  200+
                </Typography>
                <Typography variant="h6">
                  Student Entrepreneurs Engaged
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={6} md={3}>
              <motion.div variants={itemVariants}>
                <TrendingUpIcon2 sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  30+
                </Typography>
                <Typography variant="h6">
                  Successful Funding Deals Facilitated
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={6} md={3}>
              <motion.div variants={itemVariants}>
                <PeopleIcon sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  35+
                </Typography>
                <Typography variant="h6">
                  Mentors and Investors in Network
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={6} md={3}>
              <motion.div variants={itemVariants}>
                <EventIcon sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  50+
                </Typography>
                <Typography variant="h6">
                  Startup Events Hosted
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Services
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                mb: 6,
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              RiseUpNext offers a comprehensive suite of services designed to empower student entrepreneurs and accelerate their startup journeys.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <DocumentIcon sx={{ fontSize: 60, mb: 3 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    Funding Opportunities
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Discover funding options and connect with investors who believe in your vision and potential.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    READ MORE
                  </Button>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(25, 118, 210, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <BellIcon sx={{ fontSize: 60, mb: 3 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    Event Updates
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Stay informed about upcoming startup events, hackathons, workshops, and networking opportunities.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    READ MORE
                  </Button>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(255, 152, 0, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ForumIcon sx={{ fontSize: 60, mb: 3 }} />
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    Community
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Gain access to curated articles, success stories, and collaborative forums with fellow entrepreneurs.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    READ MORE
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ background: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  mb: 6,
                }}
              >
                Why Choose Us?
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, background: '#e8f5e8' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SchoolIcon sx={{ fontSize: 40, color: '#4caf50', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Tailored Mentorship for Students
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Personalized guidance specifically designed for student entrepreneurs, understanding their unique challenges and opportunities.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, background: '#fff3e0' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <BusinessIcon sx={{ fontSize: 40, color: '#ff9800', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Comprehensive Startup Support
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Full ecosystem support from mentorship to funding and educational resources, all in one platform.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, background: '#e3f2fd' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <CheckIcon sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Verified Mentor & Investor Network
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Access to vetted professionals who provide valuable insights, guidance, and support for your startup journey.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, background: '#fff8e1' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <BellIcon sx={{ fontSize: 40, color: '#f57c00', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Real-Time Opportunities & Notifications
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Instant access to funding calls, competitions, networking events, and other opportunities as they arise.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, background: '#f3e5f5' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SecurityIcon sx={{ fontSize: 40, color: '#9c27b0', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Secure and Inclusive Platform
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Safe, role-based access system that fosters collaboration and ensures data security for all users.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Card sx={{ p: 3, background: '#e0f2f1' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TrendingUpIcon sx={{ fontSize: 40, color: '#00796b', mr: 2 }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Empowering the Next Generation
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      Dedicated to empowering young innovators and fostering a culture of entrepreneurship and innovation.
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)', py: 8, color: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Ready to Start Your Entrepreneurial Journey?
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Join hundreds of student entrepreneurs who are already building their dreams with RiseUpNext
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSignUp}
                  sx={{
                    background: 'white',
                    color: '#1976d2',
                    fontSize: '1.2rem',
                    px: 4,
                    py: 2,
                    fontWeight: 600,
                    mr: 2,
                    '&:hover': {
                      background: '#f5f5f5',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(255,255,255,0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleLogin}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontSize: '1.2rem',
                    px: 4,
                    py: 2,
                    fontWeight: 600,
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ background: '#333', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ color: '#1976d2', mr: 1, fontSize: 32 }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  RISEUPNEXT
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Empowering student entrepreneurs with mentorship, funding, and resources to turn their visions into successful ventures.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Quick Links
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="Contact" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="Privacy Policy" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                Email: info@riseupnext.com
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                Phone: +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Address: 123 Innovation Street, Tech City, TC 12345
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />

          <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.6 }}>
            © 2024 RiseUpNext. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
