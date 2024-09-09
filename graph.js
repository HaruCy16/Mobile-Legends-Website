const ctx = document.getElementById("playerStats");

new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["Push", "KDA", "Survival", "Team Fight", "Farm", "Damage"],
    datasets: [
      {
        label: "Game stats",
        data: [20, 40, 40, 40, 50, 50],
      },
    ],
  },
});
