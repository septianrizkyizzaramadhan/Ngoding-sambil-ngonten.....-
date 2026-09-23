const developerProfile = {
    name: "Revy",
    age: 18,
    role: "Aspiring AI Product Engineer",
    techStack: ['JavaScript', 'Git', 'Linux', 'Node.js'],
    isReadyForAI: true,
};

console.log("==========================================");
console.log(`🚀 Profil Developer: ${developerProfile.name}`);
console.log(`🎂 Age             : ${developerProfile.age}`);
console.log(`🎯 Target Role     : ${developerProfile.role}`);
console.log(`🛠️ Tech Stack Day 1: ${developerProfile.techStack.join(", ")}`);
console.log(`📌 Status          : ${developerProfile.isReadyForAI ? "Ready for AI" : "Not ready for AI"}`);
console.log("==========================================");