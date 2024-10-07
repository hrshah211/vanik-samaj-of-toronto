import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import theme from "@/utils/Theme";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
        {/* Favicon */}
        <link rel="icon" href="/Logo.png" sizes="any" />
      </head>
      <body style={{ margin: 10, padding: 0, background: theme.colors.background }}>
        <AppBar
          position="sticky"
          style={{ background: theme.colors.primary, borderRadius: "15px", overflow: "hidden", padding: '5px 15px', boxShadow: "none"}}
        >
          <Toolbar style={{ justifyContent: "space-between", padding: "5px" }}>
            <Box display="flex" alignItems="center">
              <Image src="/Logo.png" alt="Vanik Samaj Logo" width={50} height={70} style={{marginRight: '15px'}} />
              <Typography variant="h4" style={{ fontFamily: theme.typography.h1FontFamily, color: theme.colors.onBackground, fontWeight: 'bold' }}>
                Vanik Samaj of Toronto
              </Typography>
            </Box>
            <Box display="flex" flexGrow={1} justifyContent="flex-end" gap={3}>
              <Typography variant="h5" style={{ color: theme.colors.background, fontFamily: theme.typography.h2FontFamily }}>
                Home
              </Typography>
              <Typography variant="h5" style={{ color: theme.colors.onBackground, fontFamily: theme.typography.h2FontFamily }}>
                About Us
              </Typography>
              <Typography variant="h5" style={{ color: theme.colors.background, fontFamily: theme.typography.h2FontFamily }}>
                Committee
              </Typography>
              <Typography variant="h5" style={{ color: theme.colors.background, fontFamily: theme.typography.h2FontFamily }}>
                Sponsorship
              </Typography>
              <Typography variant="h5" style={{ color: theme.colors.background, fontFamily: theme.typography.h2FontFamily }}>
                Events & Registration
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box style={{ padding: "20px", borderRadius: "15px", overflow: "hidden" }}>{children}</Box>
      </body>
    </html>
  );
}
