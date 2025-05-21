const siteOnline = true;

    if (!siteOnline) {
      // Show offline message and block all other content
      document.title = "HorrorGamesBlox";
      document.getElementById("app").innerHTML = `
        <main class="flex flex-col items-center justify-center min-h-screen bg-slate-900 px-6 text-center">
          <img src="https://static.wixstatic.com/media/66c613_06460f536cc641d9a97d0b1f702bf025~mv2.png" style="width: 158px;"  alt="Site Offline sign with bold text and dark background" class="mb-8 rounded-lg" />
          <h1 class="text-5xl font-extrabold text-pink-500 mb-4">We’ll Be Back Soon</h1>
          <p class="text-lg max-w-xl text-slate-300 mb-6">We’re currently performing maintenance and working hard to get everything back online as quickly as possible.</p>
          <p class="text-sm max-w-md text-slate-400">
            Please visit our <a href="https://status-horrorgamesblox.instatus.com/" target="_blank" rel="noopener noreferrer" class="text-pink-500 underline hover:text-pink-600">status page</a> for more information.
          </p>
        </main>
      `;
    } else {
      // Site is online, load full app code

      const gamesData = [
        {
          id: "BloodNight",
          title: "BloodNight",
          image:
            "https://tr.rbxcdn.com/180DAY-4f3faf2eebbd2e4657db5581337b37be/150/150/Image/Webp/noFilter",
          detailImage:
            "https://tr.rbxcdn.com/180DAY-306bc2d372605fdbd8ce58636a68732d/768/432/Image/Webp/noFilter",
          placeId: 15699334897,
          creator: "HorrorGamesBlox Studios",
          maturity: "Violence (Mild/Occasional)",
          createdDate: "2023-12-21",
          voiceChat: false,
          camera: false,
          serverSize: "80 players",
          genre: "Horror, Adventure",
          subgenre: "Story",
          platformSupport: ["windows", "mobile"],
          gamePlatform: "Roblox",
          isPublic: true, // Add this flag to control play button visibility
          details: `
            <h3 class="text-3xl font-bold mb-4">JumpQuest</h3>
            <button id="play-now-btn" class="btn-primary px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600" type="button" aria-label="Play JumpQuest Now">
              <i class="fas fa-play fa-lg"></i> Play
            </button>
            <p id="not-available-text" class="hidden text-center text-red-500 font-semibold mt-4">This game is currently not available to play.</p>
          `,
          longDescription: `
            <p class="leading-relaxed mb-4">
              You and your friends decided to explore a long-abandoned location on the outskirts of town, curious to see what forgotten items might be left behind. Armed with only flashlights and your phones, you enter the decaying structure, unaware of the chilling presence that lurks in the shadows.
            </p>
            <p class="leading-relaxed mb-4">
              At first, everything seems quiet. Too quiet. The deeper you go, the more unsettling the atmosphere becomes. The air is thick, the silence broken only by the creaks of old wood and distant, unexplained noises. Soon, you begin to sense it... You are not alone. Something or someone is watching your every move.
            </p>
            <p class="leading-relaxed mb-4">
              Strange things begin to happen. Objects shift on their own, whispers echo down empty hallways, and shadows flicker just out of sight. Panic sets in as the group begins to split up. Now, trapped in the dark with no way out, you must rely on your instincts, your courage, and each other to survive the night.
            </p>
            <p class="leading-relaxed">
              Will you make it through till morning, or will you become just another part of the mystery buried within these haunted walls?
            </p>
          `
        },
      ];

      // Pages content as functions returning HTML strings
      const pages = {
        home: () => {
          const bannerGame = gamesData[0]; // Use first game for banner play button
          // Featured projects HTML (games display, no auto Roblox open)
          const featuredProjectsHTML = gamesData
            .map(
              (game) => `
              <div class="border rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col bg-slate-800">
                <img alt="Screenshot of ${game.title} game" class="w-full h-64 object-cover" height="400" src="${game.image}" width="600" />
                <div class="p-6 flex flex-col flex-grow">
                  <h3 class="text-2xl font-bold mb-2">${game.title}</h3>
                  <p class="flex-grow"></p>
                </div>
              </div>
            `
            )
            .join("");

          return `
            <section class="relative h-[400px] w-full overflow-hidden">
              <img src="https://static.wixstatic.com/media/66c613_bcea8f339a934f16bc97d3c62ac52a85~mv2.png" alt="Dark atmospheric horror game background with eerie shadows and fog" class="absolute inset-0 w-full h-full object-cover brightness-50" />
              <div class="relative z-10 flex flex-col items-center justify-start h-full pt-6 px-6 text-center">
                <img src="https://static.wixstatic.com/media/66c613_e22dae0b14934cd6ad75b282484e2ccb~mv2.png" alt=", stylized DB letters in black and white" class="w-40 mb-6 sm:w-56 md:w-64" />
                <div class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8 mt-2 sm:mt-0">
                  <button class="btn-secondary flex items-center gap-3 px-8 py-4 rounded-md font-semibold bg-pink-700 hover:bg-pink-800 transition text-lg sm:text-xl" id="watch-trailer-btn" type="button" aria-label="Watch Trailer">
                    <i class="fas fa-play-circle fa-lg"></i> Watch Trailer
                  </button>
                  <button class="btn-primary flex items-center gap-3 px-8 py-4 rounded-md font-semibold bg-pink-500 hover:bg-pink-600 transition text-lg sm:text-xl" id="play-now-btn" type="button" aria-label="Play Now">
                    <i class="fas fa-play fa-lg"></i> Play Now
                  </button>
                </div>
              </div>
            </section>
            <section class="max-w-7xl mx-auto px-6 py-20">
              <h2 class="text-4xl font-extrabold text-center mb-12">FEATURED PROJECTS</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                ${featuredProjectsHTML}
              </div>
            </section>
          `;
        },
        games: () => {
          return `
            <section class="max-w-7xl mx-auto px-6 py-20" id="games">
              <h2 class="text-4xl font-extrabold text-center mb-12">Our Games</h2>
              <div id="news-container" class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                ${gamesData
                  .map(
                    (game) => `
                  <a href="#details-${game.id}" aria-label="View details for ${game.title}" class="group flex flex-col items-center space-y-3 focus:outline-none focus:ring-4 focus:ring-pink-500 rounded-lg">
                    <img alt="Game icon for ${game.title} showing a clean minimalistic stylized game logo or character on dark background" class="w-28 h-28 object-contain rounded-md shadow-md transition-transform group-hover:scale-110" src="${game.image}" />
                    <h3 class="text-lg font-semibold text-center text-slate-100 group-hover:text-pink-500 transition">${game.title}</h3>
                  </a>
                `
                  )
                  .join("")}
              </div>
            </section>
          `;
        },
        blog: () => `
          <section class="py-20 border-t border-b border-slate-700 max-w-7xl mx-auto px-6" id="blog">
            <h2 class="text-4xl font-extrabold text-center mb-12">Latest Blog Posts</h2>
            <div id="news-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <p class="text-center text-indigo-300 col-span-full select-none">Loading news posts...</p>
            </div>
          </section>
        `,
        details: (gameId) => {
          const game = gamesData.find((g) => g.id === gameId);
          if (!game) {
            return `
              <section class="max-w-7xl mx-auto px-6 py-20 text-center">
                <h2 class="text-4xl font-extrabold mb-6">Game Not Found</h2>
                <p>Sorry, the game you are looking for does not exist.</p>
                <a href="#games" class="mt-6 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">Back to Games</a>
              </section>
            `;
          }

          // Platform icons map
          const platformIcons = {
            windows: '<i class="fab fa-windows" title="Windows"></i>',
            macos: '<i class="fab fa-apple" title="MacOS"></i>',
            linux: '<i class="fab fa-linux" title="Linux"></i>',
            mobile: '<i class="fas fa-mobile-alt" title="Mobile"></i>',
            web: '<i class="fab fa-chrome" title="Web"></i>',
          };

          // Compose platform icons HTML
          const platformHTML = game.platformSupport
            .map((p) => platformIcons[p] || "")
            .join(" ");

          // Voice Chat and Camera labels with icons and yes/no
          const voiceChatHTML = game.voiceChat
            ? '<span class="inline-flex items-center gap-1 text-green-400"><i class="fas fa-microphone"></i> Yes</span>'
            : '<span class="inline-flex items-center gap-1 text-red-500"><i class="fas fa-microphone-slash"></i> No</span>';

          const cameraHTML = game.camera
            ? '<span class="inline-flex items-center gap-1 text-green-400"><i class="fas fa-video"></i> Yes</span>'
            : '<span class="inline-flex items-center gap-1 text-red-500"><i class="fas fa-video-slash"></i> No</span>';

          // Format created date nicely
          const createdDateFormatted = new Date(game.createdDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          // Play button and not available text visibility based on isPublic
          const playButtonClass = game.isPublic ? "block" : "hidden";
          const notAvailableClass = game.isPublic ? "hidden" : "block";

          return `
            <section class="max-w-6xl mx-auto px-6 py-20" id="game-details">
              <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
                <div class="md:w-1/2 flex justify-center">
                  <img alt="Thumbnail image of ${game.title} game showing a minimalistic stylized game logo or character on dark background" class="rounded-lg shadow-lg object-contain w-full max-w-md h-auto" src="${game.detailImage}" />
                </div>
                <div class="md:w-1/2 flex flex-col justify-start space-y-6 -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10">
                  <h1 class="text-5xl font-extrabold text-pink-500">${game.title}</h1>
                  <p class="text-lg text-slate-300">Created by <span class="font-semibold text-white">${game.creator}</span></p>
                  <div class="flex flex-wrap items-center gap-6 text-slate-400">
                    <div class="flex items-center space-x-2">
                      <i class="fas fa-user-friends text-pink-500"></i>
                      <span class="font-semibold">Maturity:</span>
                      <span class="font-bold text-white">${game.maturity}</span>
                    </div>
                  </div>
                  <div class="flex flex-col gap-4">
                    <button id="play-now-btn" class="btn-primary px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-3 w-full sm:w-auto bg-pink-500 hover:bg-pink-600 transition ${playButtonClass}" type="button" aria-label="Play ${game.title} Now">
                      <i class="fas fa-play fa-lg"></i> Play Now
                    </button>
                    <p id="not-available-text" class="text-red-500 font-semibold text-center w-full sm:w-auto ${notAvailableClass}">This game is currently not available to play.</p>
                    <button id="back-to-games" class="btn-secondary px-8 py-4 rounded-md font-semibold flex items-center justify-center gap-3 w-full sm:w-auto bg-pink-700 hover:bg-pink-800 transition" type="button" aria-label="Back to Games">
                      <i class="fas fa-arrow-left"></i> Back to Games
                    </button>
                  </div>
                </div>
              </div>
              <section class="mt-12 max-w-4xl mx-auto text-left text-slate-300 leading-relaxed space-y-6">
                <h2 class="text-3xl font-semibold mb-4 text-white border-b border-pink-500 pb-2">About this game</h2>
                ${game.longDescription.trim()}
              </section>
              <section class="mt-12 max-w-4xl mx-auto text-left text-slate-300 leading-relaxed space-y-6 border-t border-pink-500 pt-8">
                <h2 class="text-3xl font-semibold mb-6 text-white">Game Details</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-white font-semibold">
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-microphone text-pink-500"></i>
                    <span>Voice Chat:</span>
                    <span class="font-normal ml-auto">${voiceChatHTML}</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-video text-pink-500"></i>
                    <span>Camera:</span>
                    <span class="font-normal ml-auto">${cameraHTML}</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-calendar-alt text-pink-500"></i>
                    <span>Created:</span>
                    <span class="font-normal ml-auto">${createdDateFormatted}</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-users text-pink-500"></i>
                    <span>Server Size:</span>
                    <span class="font-normal ml-auto">${game.serverSize}</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-tags text-pink-500"></i>
                    <span>Genre:</span>
                    <span class="font-normal ml-auto">${game.genre}</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-tag text-pink-500"></i>
                    <span>Subgenre:</span>
                    <span class="font-normal ml-auto">${game.subgenre}</span>
                  </div>
                  <div class="flex items-center space-x-3 col-span-full">
                    <i class="fas fa-desktop text-pink-500"></i>
                    <span>Platform Support:</span>
                    <span class="font-normal ml-auto flex items-center space-x-2 text-white text-lg">
                      ${platformHTML}
                    </span>
                  </div>
                  <div class="flex items-center space-x-3 col-span-full">
                    <span class="font-semibold text-pink-500 flex items-center gap-2">
                      <i class="fas fa-gamepad"></i> Game Platform:
                    </span>
                    <img src="https://static.wixstatic.com/media/66c613_7e68a1af6e974e52934e6b9f93672037~mv2.png" alt="Roblox logo" class="w-8 h-8 object-contain ml-2" />
                    <span class="font-normal ml-2">${game.gamePlatform}</span>
                  </div>
                </div>
              </section>
            </section>
          `;
        },
        about: () => `
          <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl font-extrabold mb-6 text-center">About Us</h1>
            <p class="leading-relaxed mb-6">
              Created in 2022, HorrorGamesBlox Studios is a dedicated and imaginative game development team focused on crafting high-quality horror-adventure and story-driven experiences exclusively on the Roblox platform. We develop immersive, narrative-rich games that blend suspense, mystery, and exploration, allowing players to dive into chilling worlds filled with unexpected twists, atmospheric storytelling, and engaging gameplay. From conceptual design to community engagement and content updates, we manage every aspect of our projects to ensure players are always at the edge of their seat—both thrilled and captivated by the worlds we bring to life.
            </p>
            <p class="leading-relaxed mb-6">
              Founded on the principles of creativity, quality, and collaboration, we strive to push the boundaries of digital innovation. Whether you're a startup or an established company, we partner with you to bring your vision to life and help you achieve your goals.
            </p>
            <p class="leading-relaxed">
              Join us on this journey to build digital experiences that do big things.
            </p>
          </section>
        `,
        contact: () => `
          <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl font-extrabold mb-6 text-center">Contact Us</h1>
            <p class="text-center mb-8 max-w-xl mx-auto">
              Have questions or want to start a project? Reach out to us using the form below.
            </p>
            <form class="max-w-xl mx-auto space-y-6" id="contact-form" novalidate>
              <div>
                <label for="name" class="block font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" required class="w-full rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 bg-slate-800 border border-slate-700 text-slate-200" />
              </div>
              <div>
                <label for="email" class="block font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" required class="w-full rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 bg-slate-800 border border-slate-700 text-slate-200" />
              </div>
              <div>
                <label for="message" class="block font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" required class="w-full rounded-md px-4 py-2 focus:ring-2 focus:ring-pink-500 bg-slate-800 border border-slate-700 text-slate-200"></textarea>
              </div>
              <button type="submit" class="btn-primary w-full text-center bg-pink-500 hover:bg-pink-600">Send Message</button>
            </form>
          </section>
        `,
        faq: () => `
          <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl font-extrabold mb-6 text-center">Frequently Asked Questions</h1>
            <div id="faq-container" class="space-y-4">
              <div class="faq-item bg-slate-800 rounded-md p-4">
                <div class="faq-question cursor-pointer select-none flex justify-between items-center font-semibold text-lg" tabindex="0" role="button" aria-expanded="false" aria-controls="faq1-answer" id="faq1-question">
                  What services does HorrorGamesBlox Studios offer?
                  <i class="fas fa-chevron-down faq-icon transition-transform"></i>
                </div>
                <div class="faq-answer mt-2 text-slate-300" id="faq1-answer" aria-labelledby="faq1-question" hidden>
                  <p>We Created in 2022, HorrorGamesBlox Studios offers a wide range of creative and development services focused on delivering high-quality, immersive horror-adventure and story-based experiences on the Roblox platform.</p>
                </div>
              </div>
              <div class="faq-item bg-slate-800 rounded-md p-4">
                <div class="faq-question cursor-pointer select-none flex justify-between items-center font-semibold text-lg" tabindex="0" role="button" aria-expanded="false" aria-controls="faq2-answer" id="faq2-question">
                  How can I report a bug, glitch, or players?
                  <i class="fas fa-chevron-down faq-icon transition-transform"></i>
                </div>
                <div class="faq-answer mt-2 text-slate-300" id="faq2-answer" aria-labelledby="faq2-question" hidden>
                  <p> If you encounter a bug or glitch, please report it on our <a href="https://discord.gg/ym6nu2vtuH" class="text-pink-500 underline" target="_blank" rel="noopener noreferrer">Discord Communications Server</a> in the #bug-reports channel. Be sure to include a clear description, steps to reproduce the issue, and any screenshots or videos you may have. To report a player, head to the #player-reports channel and provide the player’s username, details of the incident, and when it happened.</p>
                </div>
              </div>
              <div class="faq-item bg-slate-800 rounded-md p-4">
                <div class="faq-question cursor-pointer select-none flex justify-between items-center font-semibold text-lg" tabindex="0" role="button" aria-expanded="false" aria-controls="faq3-answer" id="faq3-question">
                  Do you offer weekly updates?
                  <i class="fas fa-chevron-down faq-icon transition-transform"></i>
                </div>
                <div class="faq-answer mt-2 text-slate-300" id="faq3-answer" aria-labelledby="faq3-question" hidden>
                  <p>Yes! We are committed to regularly improving the game and often release updates on a weekly basis. These updates may include new content, bug fixes, gameplay improvements, and special events to keep the experience fresh and engaging for our community. Stay tuned on our Discord Communications Server and official channels for the <a href="#blog" class="text-pink-500 underline">latest news blog page</a>, and announcements.</p>
                </div>
              </div>
            </div>
          </section>
        `,
        terms: () => `
          <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl font-extrabold mb-6 text-center">Terms of Use</h1>
            <p class="leading-relaxed mb-6">
              Welcome to HorrorGamesBlox Studios. By accessing or using our website and services, you agree to abide by and be bound to these terms and conditions.
            </p>
            <h2 class="text-2xl font-semibold mb-3">Use of Services</h2>
            <p class="leading-relaxed mb-6">
              By using our services, you agree to do so only for lawful purposes and in a manner that does not violate the rights of others or interfere with their ability to use and enjoy the services.
            </p>
            <h2 class="text-2xl font-semibold mb-3">Intellectual Property</h2>
            <p class="leading-relaxed mb-6">
               All content, trademarks, and data on this site are the property of HorrorGamesBlox Studios or its licensors and are protected by applicable intellectual property laws.
            </p>
            <h2 class="text-2xl font-semibold mb-3">Limitation of Liability</h2>
            <p class="leading-relaxed mb-6">
              HorrorGamesBlox Studios is not liable for any damages resulting from the use of, or inability to use, our services or experiences.
            </p>
            <h2 class="text-2xl font-semibold mb-3">Changes to Terms</h2>
            <p class="leading-relaxed">
              We reserve the right to modify these terms at any time. By continuing to use our services, you agree to accept any changes made.
            </p>
          </section>
        `,
        privacy: () => `
          <section class="max-w-4xl mx-auto px-6 py-20">
            <h1 class="text-4xl font-extrabold mb-6 text-center">Privacy Policy</h1>
            <p class="leading-relaxed mb-6">
              HorrorGamesBlox Studios values your privacy and is dedicated to safeguarding your personal information.
            </p>
            <h2 class="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p class="leading-relaxed mb-6">
              We collect information that you provide directly to us, including contact details and project-related information.
            </p>
            <h2 class="text-2xl font-semibold mb-3">How We Use Information</h2>
            <p class="leading-relaxed mb-6">
              We use your information to deliver and enhance our services, communicate with you, and fulfill legal obligations.
            </p>
            <h2 class="text-2xl font-semibold mb-3">Data Security</h2>
            <p class="leading-relaxed mb-6">
              We implement reasonable security measures to safeguard your data against unauthorized access.
            </p>
            <h2 class="text-2xl font-semibold mb-3">Your Rights</h2>
            <p class="leading-relaxed">
              You have the right to access, correct, or delete your personal information. Please contact us if you have any privacy concerns.
            </p>
          </section>
        `
      };

      // Navigation HTML with only home, games, blog
      const navHTML = `
        <header class="fixed top-0 left-0 w-full bg-slate-800 shadow-md z-50">
          <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap md:flex-nowrap">
            <a href="#home" class="flex items-center space-x-2 text-slate-50">
              <img alt="DoBig Studios logo, stylized DB letters in black and white" class="w-12 h-12 object-contain" height="48" src="https://static.wixstatic.com/media/66c613_39c6070b3016431fa3e667007dc951e2~mv2.png" width="48" />
            </a>
            <nav class="hidden md:flex space-x-8 font-semibold text-slate-200 flex-wrap" id="nav-links">
              <a href="#home" class="nav-link hover:text-pink-500 transition whitespace-nowrap">Home</a>
              <a href="#games" class="nav-link hover:text-pink-500 transition whitespace-nowrap">Games</a>
              <a href="#blog" class="nav-link hover:text-pink-500 transition whitespace-nowrap">Blog</a>
            </nav>
            <button aria-label="Toggle menu" class="md:hidden focus:outline-none text-slate-200" id="menu-btn">
              <i class="fas fa-bars fa-lg"></i>
            </button>
          </div>
          <nav class="hidden md:hidden bg-slate-800 border-t border-slate-700" id="mobile-menu">
            <a href="#home" class="block px-6 py-3 border-b border-slate-700 font-semibold text-slate-200 hover:bg-slate-700 hover:text-pink-500">Home</a>
            <a href="#games" class="block px-6 py-3 border-b border-slate-700 font-semibold text-slate-200 hover:bg-slate-700 hover:text-pink-500">Games</a>
            <a href="#blog" class="block px-6 py-3 font-semibold text-slate-200 hover:bg-slate-700 hover:text-pink-500">Blog</a>
          </nav>
        </header>
      `;

      // Footer HTML with Company, Games, Blog, Support, Follow sections (unchanged)
      const footerHTML = `
        <footer class="bg-slate-800 text-slate-300 py-20 mt-20">
          <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
            <section id="company" class="space-y-6 bg-transparent">
              <h3 class="text-slate-50 text-xl font-bold mb-4">Company</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#about" class="footer-link block hover:text-pink-500 transition">About Us</a></li>
                <li><a href="#contact" class="footer-link block hover:text-pink-500 transition">Contact</a></li>
              </ul>
            </section>
            <section id="games" class="space-y-6 bg-transparent">
              <h3 class="text-slate-50 text-xl font-bold mb-4">Games</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#games" class="footer-link block hover:text-pink-500 transition">Our Games</a></li>
              </ul>
            </section>
            <section id="blog" class="space-y-6 bg-transparent">
              <h3 class="text-slate-50 text-xl font-bold mb-4">Blog</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#blog" class="footer-link block hover:text-pink-500 transition">Latest Posts</a></li>
              </ul>
            </section>
            <section id="support" class="space-y-6 bg-transparent">
              <h3 class="text-slate-50 text-xl font-bold mb-4">Support</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#faq" class="footer-link block hover:text-pink-500 transition">FAQ</a></li>
                <li><a href="#terms" class="footer-link block hover:text-pink-500 transition">Terms of Use</a></li>
                <li><a href="#privacy" class="footer-link block hover:text-pink-500 transition">Privacy Policy</a></li>
              </ul>
            </section>
            <section id="follow" class="space-y-6 bg-transparent">
              <h3 class="text-slate-50 text-xl font-bold mb-4">Follow us</h3>
              <div class="flex space-x-4">
                <a href="https://www.facebook.com/horrorgamesblox" target="_blank" aria-label="Facebook" class="block w-8 h-8">
                  <img src="https://static.wixstatic.com/media/66c613_202b967da99041d7be2b7422b5f032d3~mv2.png" alt="Facebook blue square with white letter F" class="w-8 h-8 object-contain" />
                </a>
                <a href="https://www.youtube.com/@horrorgamesblox" target="_blank" aria-label="Twitter" class="block w-8 h-8">
                  <img src="https://static.wixstatic.com/media/66c613_8e47d0fe4b3649b5a1f3e0a35a98c9c6~mv2.png" alt="YouTube icon blue square with white letter T" class="w-8 h-8 object-contain" />
                </a>
                <a href="https://discord.gg/ym6nu2vtuH" target="_blank" aria-label="discord" class="block w-8 h-8">
                  <img src="https://static.wixstatic.com/media/66c613_7e1dae88459f4cb5804ea250a29ff53b~mv2.png" alt="Discord pink square with white letter I" class="w-8 h-8 object-contain" />
                </a>
                <a href="https://www.roblox.com/communities/15404589/HorrorGamesBlox-Studios" target="_blank" aria-label="Roblox" class="block w-8 h-8">
                  <img src="https://static.wixstatic.com/media/66c613_80116f0e9b314ceea5df52e9a612ef4a~mv2.png" alt="Roblox icon blue square with white letter L" class="w-8 h-8 object-contain" />
                </a>
              </div>
            </section>
          </div>
          <div class="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t border-slate-700 pt-6">
            <div class="flex items-center space-x-3">
              <img alt="HorrorGamesBlox logo small" class="w-10 h-10 object-contain" height="40" src="https://static.wixstatic.com/media/66c613_62a0a63047194abba1e5cbfe4569a7da~mv2.png" width="40" />
              <span class="text-slate-50 font-semibold text-lg">HorrorGamesBlox</span>
            </div>
            <p class="text-sm text-slate-300">© 2022-2025 HorrorGamesBlox. All rights reserved.</p>
          </div>
        </footer>
      `;

      // Titles for pages
      const pageTitles = {
        home: "Home ┤ HorrorGamesBlox",
        games: "Our Games ┤ HorrorGamesBlox",
        blog: "Blog ┤ HorrorGamesBlox",
        details: (gameId) => {
          const game = gamesData.find((g) => g.id === gameId);
          return game ? `${game.title} ┤ HorrorGamesBlox ┤ ` : "HorrorGamesBlox ┤ Game Not Found";
        },
        about: "About Us ┤ HorrorGamesBlox",
        contact: "Contact Us ┤ HorrorGamesBlox",
        faq: "FAQ ┤ HorrorGamesBlox",
        terms: "Terms of Use ┤ HorrorGamesBlox",
        privacy: "Privacy Policy ┤ HorrorGamesBlox",
      };

      // Render function to update app content and document title
      function renderPage(page, param) {
        // Set document title
        if (page === "details" && param) {
          document.title = pageTitles.details(param);
        } else if (pageTitles[page]) {
          if (typeof pageTitles[page] === "function") {
            document.title = pageTitles[page](param);
          } else {
            document.title = pageTitles[page];
          }
        } else {
          document.title = pageTitles.home;
        }

        // Compose full HTML: nav + page content + footer
        if (page === "details" && param) {
          app.innerHTML = navHTML + `<main class="pt-24">${pages.details(param)}</main>` + footerHTML;
        } else if (pages[page]) {
          app.innerHTML = navHTML + `<main class="pt-24">${pages[page]()}</main>` + footerHTML;
        } else {
          app.innerHTML = navHTML + `<main class="pt-24">${pages.home()}</main>` + footerHTML;
        }

        // Setup mobile menu toggle
        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });

        // Highlight active nav link
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === "#" + page) {
            link.classList.add("text-pink-500", "font-bold");
            link.classList.remove("text-slate-200");
          } else {
            link.classList.remove("text-pink-500", "font-bold");
            link.classList.add("text-slate-200");
          }
        });

        // Home page buttons
        if (page === "home") {
          const playBtn = document.getElementById("play-now-btn");
          if (playBtn) {
            playBtn.onclick = () => {
              const placeId = gamesData[0].placeId;
              window.open(`https://www.roblox.com/games/start?launchData=utm1%253A0%252C0%252Cweb-link%252Chome-bottom-play-button%252C%253B&placeId=${placeId}`, "_blank");
            };
          }
          const trailerBtn = document.getElementById("watch-trailer-btn");
          if (trailerBtn) {
            trailerBtn.onclick = () => {
              alert("Trailer coming soon!");
            };
          }
        }

        // Games page clickable images
        if (page === "games") {
          // No extra JS needed since <a> wraps image and title
        }

        // Details page play button and back button
        if (page === "details") {
          const playBtn = document.getElementById("play-now-btn");
          const notAvailableText = document.getElementById("not-available-text");
          if (playBtn && notAvailableText) {
            if (gamesData.find(g => g.id === param)?.isPublic) {
              playBtn.classList.remove("hidden");
              notAvailableText.classList.add("hidden");
            } else {
              playBtn.classList.add("hidden");
              notAvailableText.classList.remove("hidden");
            }
            playBtn.onclick = () => {
              const game = gamesData.find((g) => g.id === param);
              if (game && game.isPublic) {
                window.open(`https://www.roblox.com/games/start?launchData=utm1%253A0%252C0%252Cweb-link%252Chome-bottom-play-button%252C%253B&placeId=${game.placeId}`, "_blank");
              }
            };
          }
          const backBtn = document.getElementById("back-to-games");
          if (backBtn) {
            backBtn.onclick = () => {
              window.location.hash = "games";
            };
          }
        }

        // Contact form submission handler using EmailJS
        if (page === "contact") {
          const form = document.getElementById("contact-form");
          if (form) {
            form.addEventListener("submit", (e) => {
              e.preventDefault();
              // Use EmailJS to send email
              // You need to replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your EmailJS credentials
              if (typeof emailjs === "undefined") {
                alert("Email service not loaded. Please check your internet connection.");
                return;
              }
              emailjs.sendForm('service_wga2iez', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
                .then(() => {
                  alert("Thank you for contacting us! We will get back to you soon.");
                  form.reset();
                }, (error) => {
                  alert("Failed to send message. Please try again later.");
                  console.error(error);
                });
            });
          }
        }

        // FAQ dropdown functionality
        if (page === "faq") {
          const faqItems = document.querySelectorAll(".faq-item");
          faqItems.forEach((item) => {
            const question = item.querySelector(".faq-question");
            const answer = item.querySelector(".faq-answer");
            const icon = question.querySelector(".faq-icon");

            function toggleFAQ() {
              const isOpen = answer.classList.contains("open");
              if (isOpen) {
                answer.classList.remove("open");
                answer.setAttribute("hidden", "");
                question.setAttribute("aria-expanded", "false");
                icon.classList.remove("rotate-180");
              } else {
                answer.classList.add("open");
                answer.removeAttribute("hidden");
                question.setAttribute("aria-expanded", "true");
                icon.classList.add("rotate-180");
              }
            }

            question.addEventListener("click", toggleFAQ);
            question.addEventListener("keydown", (e) => {
              if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                e.preventDefault();
                toggleFAQ();
              }
            });
          });
        }

        // If on blog page, fetch posts
        if (page === "blog") {
          fetchPosts(blogId, apiKey);
        }
      }

      // Load EmailJS SDK asynchronously
      (function () {
        const script = document.createElement("script");
        script.src = "https://cdn.emailjs.com/sdk/3.2.0/email.min.js";
        script.onload = () => {
          if (window.emailjs) {
            emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
          }
        };
        document.head.appendChild(script);
      })();

      // Blog posts fetch function
      async function fetchPosts(blogId, apiKey) {
        const newsContainer = document.getElementById("news-container");
        if (!newsContainer) return;
        try {
          const response = await fetch(
            `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}&maxResults=6`
          );
          if (!response.ok) throw new Error("Network response was not ok");
          const data = await response.json();
          if (!data.items || data.items.length === 0) {
            newsContainer.innerHTML = `<p class="text-center text-indigo-300 col-span-full select-none">No news posts available at the moment.</p>`;
            return;
          }
          let postsHTML = "";
          data.items.forEach((post) => {
            let imgSrc =
              "https://placehold.co/600x300/png?text=HorrorGamesBlox+News&font=Orbitron";
            const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/i);
            if (imgMatch && imgMatch[1]) {
              imgSrc = imgMatch[1];
            }
            const publishedDate = new Date(post.published).toLocaleDateString(
              undefined,
              { year: "numeric", month: "long", day: "numeric" }
            );
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = post.content;
            const textContent = tempDiv.textContent || tempDiv.innerText || "";
            const snippet =
              textContent.length > 150
                ? textContent.slice(0, 150) + "..."
                : textContent;

            postsHTML += `
              <article tabindex="0" class="post bg-indigo-800 rounded-lg shadow-md p-4 flex flex-col text-center text-indigo-200 focus:outline-none focus:ring-4 focus:ring-indigo-500">
                <div class="relative rounded-md overflow-hidden mb-4 w-full h-40 sm:h-48">
                  <img src="${imgSrc}" alt="News post titled '${post.title}' image" loading="lazy" class="object-cover w-full h-full" />
                  <time datetime="${post.published}" class="absolute bottom-2 left-2 bg-indigo-900 bg-opacity-75 text-indigo-300 text-xs px-2 py-1 rounded select-none">${publishedDate}</time>
                </div>
                <h3 class="font-semibold text-lg mb-1">${post.title}</h3>
                <p class="flex-grow mb-4 break-words">${snippet}</p>
                <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="read-more text-indigo-300 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded" tabindex="0">Read More</a>
              </article>
            `;
          });
          newsContainer.innerHTML = postsHTML;
        } catch (error) {
          newsContainer.innerHTML = `<p class="text-center text-red-500 col-span-full select-none">Failed to load news posts. Please try again later.</p>`;
          console.error("Error fetching news posts:", error);
        }
      }

      const blogId = "3534242146933012009";
      const apiKey = "AIzaSyCJOXhX2bNmntaaP7zmeQPKP11mw0KR8c0";

      // Initial page load and hash change handler
      function loadPageFromHash() {
        let hash = window.location.hash.substring(1);
        if (!hash) {
          renderPage("home");
          return;
        }
        // Check for details page pattern: details-<gameId>
        if (hash.startsWith("details-")) {
          const gameId = hash.split("-")[1];
          renderPage("details", gameId);
          return;
        }
        if (pages[hash]) {
          renderPage(hash);
        } else {
          renderPage("home");
        }
      }

      window.addEventListener("hashchange", loadPageFromHash);
      const app = document.getElementById("app");
      loadPageFromHash();
    }
