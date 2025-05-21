const projectData = [
    {
        id: "el",
        icon: "/portfolio/projects/ico_el.png",
        title: "Elemental Labyrinth (Unity/C#)",
        description: "A Tower Defense Game designed and developed by myself.",
        image: "projects/Elemental Labyrinth.png",
        keyFeatures: [
            "Roguelike Progression",
            "Maze Building",
            "Tower Fusion System",
            "P2P Multiplayer",
            "Steamworks Integration",
            "Localization System",
        ],
        developmentTeam: "Solo Project",
        technology: ["Unity", "C#", "FMOD", "Photoshop", "Aseprite", "Steamworks SDK", "Netcode Networking"],
        buttons: [
            {
                icon: "/portfolio/icon/ico_steam.png",
                text: "Steam",
                href: "https://store.steampowered.com/app/3516960/Elemental_Labyrinth/",
            },
            {
                icon: "/portfolio/icon/ico_youtube.png",
                text: "Trailer",
                href: "https://www.youtube.com/watch?v=-9Uavg-c_Ms",
            },
        ],
    },

    {
        id: "wob",
        icon: "/portfolio/projects/ico_wob.png",
        title: "World of Blast (React/PHP/Solidity)",
        description: "NFT Game on Blast Chain.",
        image: "projects/wob.png",
        keyFeatures: [
            "NFT Integration",
            "Play to Earn Economy",
            "Wallet Authentication",
            "Web3 Smart Contracts",
            "On-chain Randomness",
            "Gas Optimization",
            "Decentralized Storage",
        ],
        developmentTeam: "5 Members",
        technology: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Solidity",
            "Hardhat",
            "PHP",
            "MySQL",
            "Web3.js",
            "IPFS",
        ],
        buttons: [
            {
                icon: "/portfolio/icon/ico_web.png",
                text: "Website",
                href: "https://worldofblast.com/",
            },
        ],
    },

    {
        id: "vou",
        icon: "/portfolio/projects/ico_vou.svg",
        title: "VOU Game (Unity/C#/Express.js/NextJS)",
        description: "(Graduation Project) A Gamify Marketing Platform.",
        image: "projects/vou.svg",
        keyFeatures: ["Gamified Campaigns", "Online Multiplayer", "Mobile + Web Clients", "Voucher Integration"],
        developmentTeam: "4 Members",
        technology: [
            "Unity",
            "C#",
            "Next.js",
            "Node.js",
            "Express.js",
            "Docker",
            "MongoDB",
            "PostgreSQL",
            "Nginx",
            "CI/CD",
            "Redis",
            "Socket.IO",
        ],
        buttons: [
            {
                icon: "/portfolio/icon/ico_web.png",
                text: "Website",
                href: "https://vougame.com/",
            },
        ],
    },

    {
        id: "modelMinosWorld",
        icon: "/portfolio/projects/ico_minos.png",
        title: "Minos World (Unity/C#)",
        description: "Mobile Side-Scrolling Platformer.",
        image: "projects/minosworld.png",
        keyFeatures: [
            "In-App Purchases",
            "Rewarded Ads",
            "Firebase Analytics",
            "IronSource Integration",
            "Smooth Touch Controls",
        ],
        developmentTeam: "7 Members",
        technology: ["Unity", "C#", "Firebase", "IronSource", "AdMob"],
        buttons: [
            {
                icon: "/portfolio/icon/ico_android.png",
                text: "Google Play",
                href: "https://play.google.com/store/apps/details?id=com.marinobros.jump.run.world.adventure",
            },
        ],
    },

    {
        id: "modelTapMaster3D",
        icon: "/portfolio/projects/ico_tap.png",
        title: "Tap Master 3D (Unity/C#)",
        description: "Mobile Puzzle Game.",
        image: "projects/tapmaster3d.png",
        keyFeatures: [
            "Tactile Puzzle Mechanics",
            "Level Progression System",
            "Firebase Analytics",
            "Reward Ads",
            "In-App Purchase",
        ],
        developmentTeam: "4 Members",
        technology: ["Unity", "C#", "Firebase", "IronSource", "AdMob"],
        buttons: [
            {
                icon: "/portfolio/icon/ico_android.png",
                text: "Google Play",
                href: "https://play.google.com/store/apps/details?id=com.fc.pl.tap.master.tap.away",
            },
        ],
    },

    {
        id: "tcg",
        icon: "/portfolio/projects/ico_tcg.png",
        title: "TCG-Shop (Express.js)",
        description: "A Server-side application for a Trading Card Shop.",
        image: "projects/tcg.png",
        keyFeatures: [
            "Admin Dashboard",
            "CRUD System",
            "JWT Auth",
            "Email Verification",
            "VNPay Integration",
            "User Roles & Permissions",
        ],
        developmentTeam: "3 Members",
        technology: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Bcrypt",
            "Nodemailer",
            "VNPay",
        ],
        buttons: [
            {
                icon: "/portfolio/icon/ico_youtube.png",
                text: "Demo",
                href: "https://youtu.be/9kTAN0ht_yw",
            },
            {
                icon: "/portfolio/icon/ico_github.png",
                text: "Github",
                href: "https://github.com/LightKod/WAD-21KTPM1",
            },
            {
                icon: "/portfolio/icon/ico_web.png",
                text: "Website",
                href: "https://tcg-trading-card-game-final.onrender.com",
            },
        ],
    },

    {
        id: "frog",
        icon: "/portfolio/projects/ico_frog.png",
        title: "Crossing Road (C++)",
        description: "Crossing Road Game written in C++ with OOP.",
        image: "projects/frog.png",
        keyFeatures: [
            "Save & Load",
            "Leaderboard",
            "Settings Menu",
            "4 Game Modes",
            "Native C++ Graphics",
            "Local Multiplayer",
        ],
        developmentTeam: "3 Members",
        technology: ["C", "C++", "CMake", "OOP"],
        buttons: [
            {
                icon: "/portfolio/icon/ico_youtube.png",
                text: "Demo",
                href: "https://www.youtube.com/watch?v=YcGgp-uGTGc",
            },
            {
                icon: "/portfolio/icon/ico_github.png",
                text: "Github",
                href: "https://github.com/LightKod/OOP-Crossing-Road",
            },
        ],
    },

    {
        id: "snake",
        icon: "/portfolio/projects/ico_snake.png",
        title: "Snake Game (C)",
        description: "A Snake game written in C/C++.",
        image: "projects/snake.png",
        keyFeatures: [
            "Save/Load",
            "Leaderboard",
            "Settings Menu",
            "4 Game Modes",
            "Native Console Graphics",
        ],
        developmentTeam: "4 Members",
        technology: ["C", "C++", "CMake"],
        buttons: [
            {
                icon: "/portfolio/icon/ico_youtube.png",
                text: "Demo",
                href: "https://www.youtube.com/watch?v=roe3JsHokfA",
            },
            {
                icon: "/portfolio/icon/ico_github.png",
                text: "Github",
                href: "https://github.com/LightKod/DoAnKTLT",
            },
        ],
    },

    {
        id: "invoker",
        icon: "/portfolio/projects/ico_invoker.png",
        title: "Invoker Tactic (Unity/C#)",
        description: "A Tactical RPG Game designed and developed by myself.",
        image: "projects/invokertactic.png",
        keyFeatures: [
            "Randomized Tactical Maps",
            "20+ Unique Units",
            "50+ Skills",
            "50+ Items",
            "10+ Map Types",
            "Turn-Based Grid Combat",
        ],
        developmentTeam: "Solo Project",
        technology: ["Unity", "C#", "FMOD", "Photoshop", "Aseprite"],
        buttons: [
            {
                icon: "/portfolio/icon/ico_youtube.png",
                text: "Demo",
                href: "https://youtu.be/Fv4muer8GAc",
            },
        ],
    },
];

export default projectData;
