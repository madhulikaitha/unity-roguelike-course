// docs/data/solutions.js
export default {
    "w1-t1": {
      title: "Set up Grid & Player Movement — Solution",
      items: [
        "Movement: use FixedUpdate and move exactly 1 grid cell per keypress using a queued input.",
        "Clamp position within bounds (0..width-1, 0..height-1).",
        "Camera: smooth follow with Lerp, max speed clamp.",
        "Optional: Use a Tilemap; keep world positions = grid * cellSize."
      ],
      links: [
        {label:"Reference snippet (gist)", url:"https://gist.github.com/"}
      ]
    },
    "w1-t2": {
      title: "Turn System & Simple Enemy — Solution",
      items: [
        "Turn queue: player → enemies.",
        "Enemy step = move along Manhattan shortest axis toward player.",
        "Block move if target tile occupied; lose on overlap.",
        "Avoid frame dependence: process 1 action per turn."
      ]
    },
    "w1-t3": {
      title: "Pickups, Health & UI — Solution",
      items: [
        "Item types as ScriptableObjects; OnTriggerEnter → apply effect.",
        "Publish OnHealthChanged, UI subscribes to update hearts.",
        "Play pop SFX + small screen bump on pickups."
      ]
    },
    "w1-t4": {
      title: "Dungeon Room Variations — Solution",
      items: [
        "Keep 3 room prefabs. On Start, pick 1 random index.",
        "Seed RNG at start; restart seeds on new run.",
        "Gate exit until key is collected."
      ]
    },
    "w1-t5": {
      title: "Vibe Coding — Solution",
      items: [
        "Add bloom via Post-processing, clamp intensity.",
        "One delight only; record 10–20s clip and export GIF."
      ]
    }
  };
  