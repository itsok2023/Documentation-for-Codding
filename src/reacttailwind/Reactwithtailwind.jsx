import Carding from "../components/Carding";

export default function Reactwithtailwind() {
  return (
    <div className="pt-20 bg-stone-300">
      <div className="text-3xl font-bold underline text-wrap flex justify-center m-2 mt-5 mb-5 ">
        ReactJS + TailwindCSS:-
      </div>

      {/* This is first Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 1 : - Install Node.js
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Make sure Node.js is installed on your system. <br />
        - You can download it from the official website: <br />{" "}
        <i>https://nodejs.org/</i> <br /> - After installation, verify that both
        Node.js and npm are correctly installed by running the following
        commands in your terminal: <br />
        <strong>
          <i>Check versions:</i>
        </strong>
        <br />
        - At the time of writing this documentation, the versions we are using
        are: <br />
        node -v is v23.10.0 <br />
        npm -v is 10.9.2
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="terminal"
          codeinwhite1="node -v"
          codeinwhite2=""
          codeingreen=""
        ></Carding>
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="terminal"
          codeinwhite1=""
          codeinwhite2="npm -v"
          codeingreen=""
        ></Carding>
      </div>

      {/* This is second Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 2 : - Create Project Folder
      </div>
      <div className="font-serif text-md mb-9 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Create a folder anywhere on your system. You can name it anything you
        like.
        <br />
        - Open the folder in Visual Studio Code.
        <br />
        - Open the terminal in VS Code by clicking on: <br />{" "}
        <i>Terminal &gt; New Terminal</i> <br />- Now, you are ready to run the
        project creation command in the terminal.
      </div>

      {/* This is Third Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 3 : - Create a React Project using Vite
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - In the VS Code terminal, type the following command to create a new
        React project using Vite: <br />
        - This command is taken from the official Vite documentation: <br />{" "}
        <i>https://vite.dev/guide/</i> <br /> - After running the command, Wait
        for a minute…
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="VS code terminal"
          codeinwhite1="npm create vite@latest"
          codeinwhite2=""
          codeingreen=""
        ></Carding>
      </div>

      {/* This is Fourth Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 4 : - Project Name
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - follow the on-screen prompts: <br />
        - Give project name:-
        <br /> - Select a framework:- <br />- Select a variant:-
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="VS code terminal"
          codeinwhite1="Project name: » "
          codeinwhite2="Select a framework: »"
          codeinwhite3="Select a variant: »"
          codeingreen=""
        ></Carding>
      </div>

      {/* This is fifth Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 5 : - Navigate into the project folder
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Once the setup is complete, navigate into the project folder:
        <br />- type command,
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="VS code terminal"
          codeinwhite1="cd vite-project"
          codeinwhite2=""
          codeinwhite3=""
          codeingreen=""
        ></Carding>
      </div>

      {/* This is Sixth Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 6 : - Install Tailwind CSS
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - To set up Tailwind CSS in your React project, run the following
        command in your VS Code terminal:
        <br />- You can find this command on the official Tailwind website:{" "}
        <br /> <i>https://tailwindcss.com/docs/guides/vite</i> <br />- type
        command,
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="VS code terminal"
          codeinwhite1="npm install tailwindcss @tailwindcss/vite"
          codeinwhite2=""
          codeinwhite3=""
          codeingreen=""
        ></Carding>
      </div>

      {/* This is Seventh Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 7 : - Configure Tailwind in vite.config.js
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Open the file vite.config.js located in the root of your project.
        <br />- Delete all the existing code and replace it with the following
        configuration: <br />- type command,
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="vite.config.js"
          codeinwhite1="import { defineConfig } from 'vite'"
          codeinwhite2="import react from '@vitejs/plugin-react'"
          codeinwhite3="import tailwindcss from '@tailwindcss/vite'"
          codeingreen4="// https://vite.dev/config/"
          codeinwhite4="export default defineConfig({"
          codeinwhite5="plugins: [react(), tailwindcss()],"
          codeinwhite6="})"
        ></Carding>
      </div>

      {/* This is eight Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 8 : - Configure Tailwind in index.css
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Open the file src/index.css.
        <br />- Delete all existing code. <br /> - Replace it with the following
        Tailwind directives: <br />- type code,
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="index.css"
          codeinwhite1='@import "tailwindcss";'
          codeinwhite2=""
          codeinwhite3=""
          codeingreen=""
        ></Carding>
      </div>

      {/* This is Ninth Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 9 : - Run the Development Server
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Open the VS Code terminal.
        <br />- Start the development server by typing the following command:{" "}
        <br /> - This will start your React + Vite + Tailwind CSS app at: <br />{" "}
        <i>http://localhost:5173</i> <br />- type command,
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="VS code terminal"
          codeinwhite1="npm run dev"
          codeinwhite2=""
          codeinwhite3=""
          codeingreen=""
        ></Carding>
      </div>

      {/* This is Tenth Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 10 : - ReactJs with Tailwind CSS running Properly
      </div>
      <div className="font-serif text-md mb-9 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Tailwind is Working. <br />- Start your Project work.
      </div>

      {/* This is Eleventh Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 11 : - If Tailwind is Not Working – Fix by Editing index.html
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - If Tailwind CSS is not working, follow this step to test it outside
        the React component structure.
        <br />- Open the file index.html (located in the root of your project),
        delete all existing code, and replace it with the following: <br />-
        type code,
      </div>
      <div className="flex justify-center pb-9">
        <Carding
          location="index.html"
          codeinwhite1="<!doctype html>"
          codeinwhite2="<html>"
          codeinwhite3="<head>"
          codeinwhite4='<meta charset="UTF-8">'
          codeinwhite5='<meta name="viewport" content="width=device-width, initial-scale=1.0">'
          codeinwhite6='<link href="/src/styles.css" rel="stylesheet">'
          codeinwhite7="</head>"
          codeinwhite8="<body>"
          codeinwhite9='<h1 class="text-3xl font-bold underline">'
          codeinwhite10="Hello world!"
          codeinwhite11="</h1>"
          codeinwhite12="</body>"
          codeinwhite13="</html>"
          codeingreen=""
        ></Carding>
      </div>

      <div></div>
    </div>
  );
}
