// app/layout.js
"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu Icon
import theme from "@/utils/Theme";
import Image from "next/image";

export default function RootLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: "Home", link: "#" },
    { text: "About Us", link: "/about" },
    { text: "Committee", link: "#" },
    { text: "Sponsorship", link: "#" },
    { text: "Events & Registration", link: "#" },
  ];

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/Logo.png" sizes="any" />
      </head>
      <body style={{ margin: 10, padding: 0, background: theme.colors.background }}>
        <AppBar position="sticky" style={{ background: theme.colors.primary, borderRadius: "15px", overflow: "hidden", boxShadow: "none" }}>
          <Toolbar style={{ justifyContent: "space-between", padding: "15px" }}>
            <Box display="flex" alignItems="center">
              <Image
                src="/Logo.png"
                alt="Vanik Samaj Logo"
                width={50}
                height={70}
                style={{ marginRight: "15px" }}
                sizes="(max-width: 600px) 40px, (min-width: 601px) 50px" // Adjust size for mobile
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: theme.typography.h1FontFamily,
                  color: theme.colors.onBackground,
                  fontWeight: "bold",
                  fontSize: { xs: "1.2rem", sm: "2rem" }, // Responsive font size
                }}
              >
                Vanik Samaj of Toronto
              </Typography>
            </Box>
            {/* Hamburger Menu for mobile */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", sm: "none" } }} // Only show on mobile
            >
              <MenuIcon />
            </IconButton>
            {/* Navigation items for larger screens */}
            <Box display={{ xs: "none", sm: "flex" }} flexGrow={1} justifyContent="flex-end" gap={3}>
              {menuItems.map((item) => (
                <Typography key={item.text} variant="h5" style={{ color: theme.colors.background, fontFamily: theme.typography.h2FontFamily }}>
                  {item.text}
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer for mobile navigation */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.text} onClick={toggleDrawer}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <Box style={{ padding: "20px", borderRadius: "15px", overflow: "hidden" }}>{children}</Box>
      </body>
    </html>
  );
}
