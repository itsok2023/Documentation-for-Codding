import Carding from "../components/Carding";

export default function Nextwithtailwind() {
  return (
    <div className="pt-20 bg-stone-300">
      <div className="text-3xl font-bold underline text-wrap flex justify-center m-2 mt-5 mb-5 ">
        NextJS + TailwindCSS:-
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
        Step 3 : - Create a NextJS Project using Vite
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - In the VS Code terminal, type the following command to create a new
        NextJS project using Vite: <br />- After running the command, Wait
        for a minute…
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="VS code terminal"
          codeinwhite1="npx create-next-app@latest my-nextjs-tailwind-app"
          codeinwhite2=""
          codeingreen=""
        ></Carding>
      </div>

      {/* This is Fourth Step */}
      <div className="font-serif text-lg mb-3 text-justify ml-9 mr-9 font-bold md:ml-43">
        Step 4 : - Prompted with several questions
      </div>
      <div className="font-serif text-md mb-3 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Follow the on-screen prompts: <br />
        - Would you like to use TypeScript? » <strong>No</strong> / Yes <br />
        - Would you like to use ESLint? » <strong>No</strong> / Yes <br />
        - Would you like to use Tailwind CSS? » No / <strong>Yes</strong> <br />
        - Would you like your code inside a `src/` directory? » No / <strong>Yes</strong> <br />
        - Would you like to use App Router? (recommended) » No / <strong>Yes</strong> <br />
        - Would you like to use Turbopack for `next dev`? » <strong>No</strong> / Yes <br />
        - Would you like to customize the import alias (`@/*` by default)? » <strong>No</strong> / Yes <br />
        
      </div>
      <div className="flex justify-center mb-9">
        <Carding
          location="VS code terminal"
          codeinwhite1="Would you like to use TypeScript? » "
          codeinwhite2="Would you like to use ESLint? »"
          codeinwhite3="Would you like to use Tailwind CSS? » "
          codeinwhite4="Would you like your code inside a `src/` directory? »"
          codeinwhite5="Would you like to use App Router? (recommended) »"
          codeinwhite6="Would you like to use Turbopack for `next dev`? »"
          codeinwhite7="Would you like to customize the import alias (`@/*` by default)? »"
          codeingreen2="No"
          codeingreen3="No"
          codeingreen4="Yes"
          codeingreen5="Yes"
          codeingreen6="Yes"
          codeingreen7="No"
          codeingreen8="No"
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
          codeinwhite1="cd my-nextjs-tailwind-app"
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
        <br /> - This will start your NextJS + Tailwind CSS app at: <br />{" "}
        <i>http://localhost:3000</i> <br />- type command,
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
        Step 10 : - NextJs with Tailwind CSS running Properly
      </div>
      <div className="font-serif text-md pb-9 text-justify ml-9 mr-9 md:ml-43 md:mr-43">
        - Tailwind is Working. <br />- Start your Project work.
      </div>

      
      
    </div>
  );
}
