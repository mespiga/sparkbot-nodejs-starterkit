/*
 * Simple bot that echoes new Cisco Spark messages to the console
 *
 * Illustrates an Outgoing integration
 *
 */
var SparkBot = require("../sparkbot");

var config = {
  attach_as: "integration",
  port: 8080,
  URI: "/integration"
};

// Starts your integration
var bot = new SparkBot(config);

// This function will be called every time a new message is posted into Spark
bot.register(function(message) {
  //
  // ADD YOUR CUSTOM CODE HERE
  //
  console.log("New message from " + message.personEmail + ": " + message.text)
});


