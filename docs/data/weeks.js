export default {
  "weeks": [
    {
      "id": "w1",
      "title": "Core Roguelike Sprint",
      "focus": "Grid move, camera, enemy, pickups, and vibe coding",
      "tasks": [
        {
          "id": "w1-t1",
          "title": "Set up Grid & Player Movement",
          "xp": 40,
          "micro": [
            "Create new URP 3D/2D project",
            "Add 10x10 grid or tilemap",
            "Move on grid with WASD/Arrows (no diagonal)",
            "Clamp to bounds & smooth camera"
          ],
          "resources": {
            "short": {
              "label": "Grid-Based Movement (short)",
              "url": "https://www.youtube.com/watch?v=mbzXIOKZurA"
            },
            "long": {
              "label": "Series: Grid Movement (Part 1)",
              "url": "https://www.youtube.com/watch?v=4JaHSLA2CKs"
            },
            "article": {
              "label": "Deterministic movement",
              "url": "https://discussions.unity.com/t/how-to-handle-grid-movement-tilemaps/",
              "summary": "Keep movement deterministic; prefer fixed-step updates; tilemaps help snap to grid & bounds checking. Compare Translate vs Rigidbody behavior."
            }
          }
        },
        {
          "id": "w1-t2",
          "title": "Turn System & Simple Enemy",
          "xp": 40,
          "micro": [
            "Make input consume one turn",
            "Enemy steps toward player each turn",
            "Order: player \u2192 enemies",
            "Lose if enemy reaches player"
          ],
          "resources": {
            "short": {
              "label": "Turn-Based System (short)",
              "url": "https://www.youtube.com/watch?v=0QU0yV0CYT4"
            },
            "long": {
              "label": "Enemy AI via State Machine (long)",
              "url": "https://www.youtube.com/watch?v=eR-AGr5nKEU"
            },
            "article": {
              "label": "Turn queues & fairness",
              "url": "https://gamedevelopment.tutsplus.com/turn-based-game-loop-design--cms-25662t",
              "summary": "Use a simple turn queue: collect input, resolve player, then enemies. Decouple input from resolution; process one turn at a time to avoid frame-rate issues."
            }
          }
        },
        {
          "id": "w1-t3",
          "title": "Pickups, Health & UI",
          "xp": 30,
          "micro": [
            "Health hearts/bar",
            "Food heals; key unlocks door",
            "HUD with hearts & key count",
            "Juice: pop SFX + small screen bump"
          ],
          "resources": {
            "short": {
              "label": "Hearts/Health UI (short)",
              "url": "https://www.youtube.com/watch?v=5NViMw-ALAo"
            },
            "long": {
              "label": "Brackeys: Health Bar (long)",
              "url": "https://www.youtube.com/watch?v=BLfNP4Sc_iA"
            },
            "article": {
              "label": "Unity UI basics",
              "url": "https://learn.unity.com/tutorial/creating-ui-in-unity",
              "summary": "Event-driven HUD using C# events to reflect health and pickups. Keep feedback immediate (sound/flash/+1 text) for focus."
            }
          }
        },
        {
          "id": "w1-t4",
          "title": "Dungeon Room Variations (Tiny RNG)",
          "xp": 30,
          "micro": [
            "Create 3 room prefabs",
            "Pick 1 on start",
            "Gate with key objective",
            "Restart run on death"
          ],
          "resources": {
            "short": {
              "label": "Dungeon Gen in 3 Minutes",
              "url": "https://www.youtube.com/watch?v=_9vxOPmj7vc"
            },
            "long": {
              "label": "Procedural Dungeons Intro",
              "url": "https://www.youtube.com/watch?v=-QOCX6SVFsk"
            },
            "article": {
              "label": "Fair randomness",
              "url": "https://www.redblobgames.com/articles/probability/damage-rolls.html",
              "summary": "Constrain randomness and seed runs for reproducibility. Use consistent signals to teach player expectations and maintain fairness."
            }
          }
        },
        {
          "id": "w1-t5",
          "title": "Vibe Coding (15\u201325 min)",
          "xp": 20,
          "micro": [
            "Set timer; record one build clip",
            "Add one delight (glow/sfx/sparkles)",
            "Commit 'vibe-xp'",
            "Share 10-sec clip or GIF"
          ],
          "resources": {
            "short": {
              "label": "Quick Glow (short)",
              "url": "https://www.youtube.com/watch?v=bkPe1hxOmbI"
            },
            "long": {
              "label": "Post-Processing Overview",
              "url": "https://www.youtube.com/watch?v=9tjYz6Ab0oc"
            },
            "article": {
              "label": "Reduce flashing effects",
              "url": "https://gameaccessibilityguidelines.com/allow-players-to-reduce-flashing-effects/",
              "summary": "Add glow/juice with care; keep intensities comfortable and provide toggles for accessibility, reducing flashing where possible."
            }
          }
        }
      ]
    }
  ]
};