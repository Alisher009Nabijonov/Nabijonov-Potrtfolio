import React from "react";
// import {Input} from "@heroui/react";
import { Box, TextField, Button } from "@mui/material";
const CantactMe = () => {
  return (
    <div id="cantact" className="w-full m">
      <div className="sm:w-[970px] max-w-[90%] mx-auto">
        <div>
          <h1 className="text-center mb-3 text-black text-2xl font-bold">
            Contacts
          </h1>
          <h2 className="text-center">Want to know more or just chat?</h2>
          <h2 className="text-center">You are welcome!</h2>
        </div>
        <Box
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
          <form className="mx-auto flex flex-col justify-center items-center w-full">
            <TextField
              required
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              className="bg-[#ebebeb]"
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
