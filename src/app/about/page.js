// app/about/page.js
import { Box, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import theme from "@/utils/Theme";

const AboutUs = () => {
  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px" }, // Responsive padding
        fontFamily: theme.typography.h2FontFamily,
        backgroundColor: theme.colors.background,
        paddingLeft: { xs: "10px", sm: "100px" }, // Responsive padding
        paddingRight: { xs: "10px", sm: "100px" }, // Responsive padding
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: theme.typography.h1FontFamily,
          marginBottom: "10px",
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive font size
        }}
      >
        Our History
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "0.9rem", sm: theme.typography.bodyFontSize }, // Responsive font size
          lineHeight: "1.7",
          marginBottom: "20px",
        }}
      >
        Vanik Samaj of Toronto (VST) is a large community-based, not for profit organization in the Greater Toronto Area (GTA) and was founded in 1984
        with the efforts of our beloved community leaders. Since inception, our organization has grown from strength to strength and has experienced
        tremendous growth over time in its memberships. It’s all possible due to the vision of our leaders and their hard work, dedication, strong
        leadership, and promotion by our members.
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontFamily: theme.typography.h1FontFamily,
          marginBottom: "10px",
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive font size
        }}
      >
        Our Objectives
      </Typography>

      <List>
        {[
          "To preserve and protect our Gujarati (Indian) cultural values, traditions, and beliefs.",
          "To provide a platform for all Vaniks to come together by means of religious as well as social activities.",
          "To educate our children on the importance of festivals and the ability to celebrate our religious festivals in a traditional way.",
          "To work with other similar social organizations.",
          "To render necessary services to needy immigrants as much as possible.",
          "To encourage education by granting scholarships for grade 12 students.",
          "To encourage youth for their active involvement and participation.",
        ].map((objective, index) => (
          <ListItem key={index} sx={{ padding: { xs: "5px", sm: "10px" } }}> {/* Responsive padding */}
            <ListItemIcon>
              <img
                src="/Logo.png" // Use your logo as bullet points
                alt="Bullet Point"
                style={{
                  height: "20px", // Adjust size as necessary
                  marginRight: "10px",
                }}
              />
            </ListItemIcon>
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: theme.typography.bodyFontSize }, // Responsive font size
                lineHeight: "1.7",
              }}
            >
              {objective}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AboutUs;
