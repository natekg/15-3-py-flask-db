# ABOUT THIS PROJECT

This is an example of how to use Python to create a frontend html page with scripts that calculate answers
and save the answers to a json file.

# STOP! DO THIS FIRST!

You MUST create a "virtual environment" when working with python web development.

A "virtual enviroment" is basically a container where you can install different versions of different packages and libraries. This is critically important because Python is typically already installed on most machines, and it's easy to junk up your system or create potential conflicts. Do this everytime you have a project.

## Creating A Virtual Environment

1. Make your folder using terminal/command line
   Enter this command _mkdir project-name_

2. Make sure your terminal is in the correct folder

3. Start the virtual environment
   In your terminal/command line, enter:

   > windows: _.\venv\Scripts\activate_
   > macos: _source venv/bin/activate_

4. Checking with terminal/cmd
   If this is correct, your terminal/command line should now say (venv) on your active line

5. Exit the venv when you're done with _deactivate_

# Dependencies

1. Do this AFTER your virtual environment is set up
   While in your virtual environment, you can install your dependencies and not worry about conflifts because it's all self-contained

2. Install Flask
   Flask is a web framework written in Python. It is classified as a micro-framework because it does not require particular tools or libraries. This makes it simple and lightweight, but it's also extensible and can be used in a wide range of applications, from simple web pages to complex APIs.

   Flask provides the essentials to get an app up and running, such as routing, request and response objects, and templates, without the overhead of a full-fledged framework like Django, which includes an ORM, an admin interface, and many other built-in features.

   Despite its simplicity, Flask can be extended with various extensions and libraries, allowing you to add features as needed. This makes it quite flexible and adaptable to a wide range of project requirements.

   Check that you're running your virtual environment, then install Flask with: _pip install Flask_

   Check the install by running > python -c "import flask; print(flask.**version**)"

# Run The App

1. Start by activating your virtual environment

2.
