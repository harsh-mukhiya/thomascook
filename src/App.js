import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Hotels from './pages/Hotel/Hotels';
import Myrouter from './components/Myrouter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const steps = [
  {
    id: "Greet",
    message: "Hello, Welcome to ThomasCook Support",
    trigger: "Done",
  },
  {
    id: "Done",
    message: "Please enter your name!",
    trigger: "waiting1",
  },
  {
    id: "waiting1",
    user: true,
    trigger: "Name",
  },
  {
    id: "Name",
    message: "Hi {previousValue}, Please select From the following options",
    trigger: "issues",
  },
  {
    id: "issues",
    options: [
      { value: "about", label: "What is ThomasCook?", trigger: "about" },
      {
        value: "loginissue",
        label: "Login Related Issues",
        trigger: "loginissue",
      },
      { value: "endchat", label: "Close Chat", trigger: "thanks" },
    ],
  },
  {
    id: "about",
    message:
      "Set up in 1881, Thomas Cook (India) Limited (TCIL) is the leading omnichannel travel company in the country offering a broad spectrum of services including Foreign Exchange, Corporate Travel, MICE, Leisure Travel, Value Added Services and Visa Services. It operates leading B2C and B2B brands including Thomas Cook, SOTC, TCI, SITA, Asian Trails, Allied TPro, Australian Tours Management, Desert Adventures, Travel Circle International Limited (TCI 勝景), Sterling Holiday Resorts Limited, Distant Frontiers, TC Tours, Digiphoto Entertainment Imaging (DEI), Go Vacation, Private Safaris East & South Africa",
    trigger: "thanks",
  },
  {
    id: "loginissue",
    message: "Please select from the following issues",
    trigger: "loginoptions",
  },
  {
    id: "loginoptions",
    options: [
      { value: "howto", label: "How To SignUp/Login?", trigger: "howto" },
      {
        value: "Forgot",
        label: "Forgot your Login Password?",
        trigger: "forgot",
      },
    ],
  },
  {
    id: "howto",
    message:
      "Click on the Singup or Login button on top right corner of the screen and fill in your Registered Email id and Password to login or if not registered then in sigup page register with your Email id..",
    trigger: "thanks",
  },
  {
    id: "forgot",
    message:
      "To recover your Password navigate to Login page and click on forgot password option to generate new password...",
    trigger: "thanks",
  },
  {
    id: "thanks",
    message: "Thanks For Contacting Support.Have a Nice Day",
    trigger: "restart",
  },
  {
    id: "restart",
    options: [
      {
        value: "restartchat",
        label: "Restart Chat",
        trigger: "restartclicked",
      },
      { value: "notlisted", label: "Issue Not Listed", trigger: "notlisted" },
    ],
  },
  {
    id: "restartclicked",
    message: "Please select From the following options",
    trigger: "issues",
  },
  {
    id: "notlisted",
    message: "Please Type your Issue in the chatBox.",
    trigger: "typeissue",
  },
  {
    id: "typeissue",
    user: true,
    trigger: "issuetyped",
  },
  {
    id: "issuetyped",
    message:
      "Our Representative will soon connect with you and will resolve your issue.",
    trigger: "thanks",
  },
];
// Creating our own theme
const theme = {
  background: "#EBFAFA",
  fontFamily: "sans-serif",
  headerBgColor: "#5161ce",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#5161ce",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// Set some properties of the bot
const config = {
  botAvatar:
    "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/9/9/2/512992_shutterstock_715962319converted_749269.png",
  floating: true,
};
function App() {
  
  return (
    <div>
      {/* <Home handleLoginClick={handleLoginClick} isShowLogin={isShowLogin} isShowRegister={isShowRegister} handleRegisterClick={handleRegisterClick}></Home>
      <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="ThomasBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider> */}
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="ThomasBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
            <Myrouter></Myrouter>
            <ToastContainer />
    </div>
  );
}

export default App;
