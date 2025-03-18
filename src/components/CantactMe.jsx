import React, { useState } from "react";
// import {Input} from "@heroui/react";
import { ToastContainer, toast } from 'react-toastify';
import { Box, TextField, Button } from "@mui/material";
const CantactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const sendToTelegramBot = async (e) => {
    e.preventDefault();
    const botToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
    const chatId = "5900769240";

    const text = `
😀 Name: ${formData.name}\n📧 Email: ${formData.email}\n📨 Message: ${formData.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        }
      );

      if (response.ok) {
        toast.success("Successfully sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send. Please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send. Please try again!");
    }
  };
  return (
    <div id="cantact" className="w-full m">
       <ToastContainer />
      <div className="sm:w-[970px] max-w-[90%] mx-auto">
        <div>
          <h1 className="text-center mb-3 text-black text-2xl font-bold">
            Contacts
          </h1>
          <h2 className="text-center">Want to know more or just chat?</h2>
          <h2 className="text-center">You are welcome!</h2>
        </div>
        <Box
        id='box_input'
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            borderRadius: 2,
          }}
          className=" rounded-md w-[50%] sm:w-[400px] bg-white mx-auto flex justify-center items-center"
        >
          <form
            onSubmit={sendToTelegramBot}
            className="mx-auto flex flex-col justify-center items-center w-full"
          >
            <TextField
              required
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              className="bg-[#ebebeb]"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              required
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              className="bg-[#ebebeb]"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              required
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              className="bg-[#ebebeb]"
              value={formData.message}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "black",
                color: "white",
                width: "70%",
                margin: "0 auto",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default CantactMe;
