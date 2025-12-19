import React, { useState } from "react";
import { Check, X, RotateCcw } from "lucide-react";

const poems = [
  {
    id: 1,
    title: "Static in the Walls",
    content: [
      "The radio hums without a tune.\nLights flicker though it's still noon.\nDoors open wide, then seal up tight.\nThe air feels wrong inside the room.",
      "Shadows lean but never fall.\nFootsteps pause behind the wall.\nEvery echo knows my name.\nI don't recall if I called at all.",
      "Glass thoughts bend when I press too hard.\nEach truth feels thin, each lie feels sharp.\nI gather pieces from the floor.\nNone of them match, none of them start.",
      "I sit and wait for quiet ground.\nFor one clear note, one stable sound.\nMaybe the noise will learn my shape.\nMaybe I'll stay once I'm found.",
    ],
    answer: "Schizophrenia",
    description:
      'Schizophrenia is a mental health condition that affects how a person perceives reality, processes thoughts, and understands what is real or not. People may experience hallucinations, unusual beliefs, or disorganized thinking, often without realizing these experiences are symptoms.\n\nSchizophrenia is not a personal failure, and while it is usually a lifelong condition, it can be managed with treatment, medication, therapy, and support. Many people live meaningful lives with the right care.\n\nIf you think someone may be struggling, listen without arguing about what is "real", avoid dismissing their experiences, and encourage professional help gently. Avoid judgment, fear-based reactions, or labeling them as "dangerous." Understanding and consistency matter more than fixing.',
  },
  {
    id: 2,
    title: "Under a Dimmed Sun",
    content: [
      "The sun arrives but does not stay.\nIt touches things, then turns to gray.\nMy body moves like wet cement.\nEach step feels late, each breath delayed.",
      "Rooms feel large but somehow tight.\nTime stretches thin both day and night.\nEven laughter leaves a bruise.\nEven rest forgets its light.",
      "I keep a chair for things I lost.\nOld words, old warmth, the hidden cost.\nThey sit with me and say nothing.\nSilence speaks, but pays the most.",
      "Still, seeds sleep under frozen ground.\nRoots grow quiet, safe, unbound.\nI stay here long enough to wait.\nFor spring to learn my name and sound.",
    ],
    answer: "Depression",
    description:
      'Depression is more than sadness. It is a condition that affects mood, energy, motivation, and the ability to feel pleasure or hope. It can make even simple tasks feel heavy and exhausting.\n\nDepression can be treated, and many people recover or learn to manage it well with therapy, medication, lifestyle changes, and support. Healing is often gradual, not instant.\n\nIf someone may be depressed, take their feelings seriously, even if you don\'t fully understand them. Avoid telling them to "cheer up" or "try harder." Instead, offer patience, presence, and reassurance that they are not a burden.',
  },
  {
    id: 3,
    title: "Where the Tides Decide",
    content: [
      "Some mornings rise without a shore.\nI spill with light and ask for more.\nMy hands are full of burning plans.\nI swear I've been this strong before.",
      "The sky feels close, the air feels fast.\nI outrun sleep, I outrun past.\nEvery thought feels made of fire.\nI don't ask how long it lasts.",
      "Then water pulls me far below.\nThe current slows what used to glow.\nMy pockets fill with heavy hours.\nThe world forgets I said hello.",
      "I learn the moon still pulls the sea.\nNot good or bad, just part of me.\nI chart the waves, I watch the stars.\nI stay afloat by letting be.",
    ],
    answer: "Bipolar Disorder",
    description:
      "Bipolar disorder is a mood disorder marked by cycles of emotional highs (mania or hypomania) and lows (depression). These shifts are not choices and can deeply affect sleep, energy, judgment, and emotions.\n\nBipolar disorder is a lifelong condition, but it is highly manageable with proper treatment, especially mood-stabilizing medication and therapy. Stability is possible, though symptoms may come in waves.\n\nIf you think someone has bipolar disorder, avoid minimizing either their highs or lows. Do not romanticize manic periods or shame depressive ones. Support routines, encourage treatment, and stay grounded and nonjudgmental.",
  },
  {
    id: 4,
    title: "False Alarms at Rest",
    content: [
      "The door is locked, I check again.\nMy heart keeps tapping like a pen.\nThe floor feels thin beneath my feet.\nAs if it might give in, then when?",
      "A whisper warns me of the air.\nOf broken glass that isn't there.\nMy shoulders lift before the fall.\nI brace for hands that never grab.",
      "The clock ticks loud, then louder still.\nEach second tests my fragile will.\nI plan escapes from quiet rooms.\nIn case the silence learns to kill.",
      "I place my palm against my chest.\nRemind the drum it's doing its best.\nThe storm can pass without a fight.\nI stay. I breathe. I let it rest.",
    ],
    answer: "Anxiety Disorder",
    description:
      'Anxiety disorders involve persistent fear, worry, or physical tension that feels hard to control and often disproportionate to the situation. The body may stay in "alarm mode" even when there is no real danger.\n\nAnxiety is very treatable, and many people improve significantly with therapy, coping skills, medication, or a combination of approaches.\n\nIf someone struggles with anxiety, avoid saying "there\'s nothing to worry about." Their fear feels real to them. Instead, offer calm reassurance, patience, and validation, and avoid pressuring them to "just relax."',
  },
  {
    id: 5,
    title: "Between Staying and Smoke",
    content: [
      "I live where lines are never straight.\nEach word arrives five seconds late.\nI read your face like changing signs.\nAm I too close? Am I too late?",
      "I build a house from borrowed hands.\nThen fear the cracks, then fear the plans.\nI love like fire, leave like smoke.\nI never know where either lands.",
      "The mirror shifts when I look in.\nSome days a stranger, some days kin.\nI try to hold one solid shape.\nIt melts the moment I begin.",
      "I practice staying when it hurts.\nNaming pain before it bursts.\nI'm not the storm, I'm not the break.\nI'm learning how the heart converts.",
    ],
    answer: "Borderline Personality Disorder",
    description:
      'Borderline Personality Disorder affects how a person experiences emotions, relationships, and sense of self. Emotions can feel intense and overwhelming, and fear of abandonment is common.\n\nBPD can improve greatly over time, especially with specialized therapy. Many people experience meaningful recovery and stronger emotional regulation.\n\nIf you think someone has BPD, avoid labeling them as "dramatic" or "manipulative." These behaviors are often expressions of pain, not intent. Consistency, clear boundaries, and compassion are far more helpful than judgment or withdrawal.',
  },
  {
    id: 6,
    title: "The Room with the Light On",
    content: [
      "There's a room I never close.\nPaint on walls, a quiet pose.\nTiny shoes beneath the bed.\nI visit when the world feels cold.",
      "A voice hums songs without a word.\nTrusting sounds it's never heard.\nIt waits for footsteps down the hall.\nStill believing they'll return.",
      "That room learned early how to wait.\nHow to smile, how to translate.\nHow to shrink into the walls.\nHow to be good. How to be safe.",
      "I kneel down slow and speak its name.\nTell it none of this was blame.\nWe leave the light on when we go.\nWe don't lock doors the same.",
    ],
    answer: "Inner Child (Childhood Trauma)",
    description:
      'The "inner child" represents parts of a person shaped by early experiences, especially unmet emotional needs or trauma. These parts can influence adult emotions, reactions, and relationships.\n\nHealing is absolutely possible, often through therapy, self-compassion, and supportive relationships. It is about integration, not erasing the past.\n\nIf someone is working through childhood wounds, avoid minimizing their experiences or comparing them to others. Safety, patience, and validation help the most.',
  },
  {
    id: 7,
    title: "Before the Map",
    content: [
      "I move the way the river bends.\nBefore the map, before the ends.\nI know the weight of every stone.\nI choose the path before you stand.",
      "I speak in dreams and sudden heat.\nIn tightening throat, in tired feet.\nI carry stories you forgot.\nI surface when you try to sleep.",
      "I learned your fear before your voice.\nI learned your hurt before your choice.\nI keep the ledger, not the rules.\nI count what's lost, not what you show.",
      "Listen not with ears or thought.\nBut pauses long and moments caught.\nI'm not your enemy or ghost.\nI'm only asking to be taught.",
    ],
    answer: "Subconscious / Implicit Trauma",
    description:
      'The subconscious holds emotional memories, patterns, and learned responses that operate beneath conscious awareness. Trauma can live in the body and reactions even when someone "knows better" logically.\n\nThese patterns can be healed or softened over time through therapy, mindfulness, and body-based approaches. Awareness is often the first step.\n\nIf someone struggles with reactions they can\'t explain, avoid frustration or blame. Understanding that not all pain is conscious helps create empathy and safety.',
  },
  {
    id: 8,
    title: "Ground That Holds",
    content: [
      "I don't shout loud or stand above.\nI settle in like trusted gloves.\nI hold the weight of shaky days.\nI don't demand. I don't shove.",
      "I walk beside my doubt, not through.\nI let it talk, then answer true.\nI know my hands can build again.\nEven if they shake right through.",
      "I choose myself without defense.\nNo sharpened edge, no high pretense.\nI trust the quiet yes inside.\nIt speaks without a need to sense.",
      "I am the ground that doesn't run.\nNot perfect steel, but solid stone.\nI lean, I stand, I stay upright.\nI am my own. I am my own.",
    ],
    answer: "Self-Confidence & Trust",
    description:
      "Self-confidence and trust reflect a stable sense of worth, self-belief, and inner safety. This does not mean never doubting—it means being able to stand even with doubt present.\n\nThis state can be built, even after trauma or mental illness. Growth often comes slowly through self-compassion, boundaries, and support.\n\nIf someone is developing self-trust, avoid rushing or testing them. Encourage autonomy, respect their pace, and affirm progress without pressure.",
  },
];

const disorders = [
  "Schizophrenia",
  "Depression",
  "Bipolar Disorder",
  "Anxiety Disorder",
  "Borderline Personality Disorder",
  "Inner Child (Childhood Trauma)",
  "Subconscious / Implicit Trauma",
  "Self-Confidence & Trust",
];

export default function PoemMatcher() {
  const [matches, setMatches] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [shuffledDisorders] = useState(() => {
    const shuffled = {};
    poems.forEach((poem) => {
      shuffled[poem.id] = [...disorders].sort(() => Math.random() - 0.5);
    });
    return shuffled;
  });

  const handleClick = (disorder, poemId) => {
    if (!showResults) {
      setMatches((prev) => ({
        ...prev,
        [poemId]: disorder,
      }));
    }
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const reset = () => {
    setMatches({});
    setShowResults(false);
    window.location.reload();
  };

  const isCorrect = (poemId) => {
    const poem = poems.find((p) => p.id === poemId);
    return matches[poemId] === poem.answer;
  };

  const allMatched = poems.every((poem) => matches[poem.id]);

  return (
    <div
      className="min-h-screen bg-pink-50 text-gray-800 p-8"
      style={{ fontFamily: "'Crimson Text', 'Georgia', serif" }}
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 pb-8 border-b-2 border-pink-200">
          <h1
            className="text-6xl font-bold mb-6 text-transparent bg-clip-text 
             bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Mental Health Poetry Matcher
          </h1>

          <div className="text-gray-700 space-y-4 max-w-3xl mx-auto">
            <p
              className="text-xl font-semibold"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Art Therapy Final Project
            </p>
            <div className="text-base leading-relaxed space-y-3 text-gray-600">
              <p>
                This project was created to raise awareness about mental
                disorders and to help people better understand what it can feel
                like to live with them. Instead of listing facts, we chose
                poetry because emotions are often harder to explain than they
                are to experience.
              </p>
              <p>
                As you play, you'll read each poem and try to match it to a
                concept. The goal isn't to "get it right" quickly. It's to slow
                down, reflect, and notice what the imagery is carrying
                underneath the words. The best answers come from empathy, not
                guessing.
              </p>
              <p>
                We hope you enjoy playing and exploring the meanings. While you
                read, try to step into the speaker's shoes — feel the confusion,
                the heaviness, the fear, the longing, and the fight to stay
                afloat. Above all, we want this to be a space of understanding:
                less judgment, more support.
              </p>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p className="font-semibold">Created by Bashir and Islam</p>
              <p>Course: ART 1399</p>
              <p>Supervised by Nadia Benhmama</p>
            </div>
          </div>
        </header>

        <div className="space-y-8 mb-8 flex flex-col items-center">
          {poems.map((poem) => (
            <div
              key={poem.id}
              className="w-full max-w-2xl bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 border-pink-200 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-2xl font-semibold text-gray-900 text-center w-full"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {poem.title}
                </h3>
                {showResults && (
                  <div className="flex items-center gap-2">
                    {isCorrect(poem.id) ? (
                      <div className="flex items-center gap-2 text-green-700">
                        <Check size={20} />
                        <span className="text-sm font-medium">Correct!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-700">
                        <X size={20} />
                        <span className="text-sm font-medium">Incorrect</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mb-6 space-y-4">
                {poem.content.map((stanza, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 leading-loose whitespace-pre-line italic text-center"
                  >
                    {stanza}
                  </p>
                ))}
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {shuffledDisorders[poem.id].map((disorder) => (
                  <button
                    key={disorder}
                    onClick={() => handleClick(disorder, poem.id)}
                    disabled={showResults}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border-2 ${
                      matches[poem.id] === disorder
                        ? "bg-pink-300 border-pink-400 text-gray-900"
                        : "bg-white border-pink-200 text-gray-700 hover:bg-pink-50"
                    } ${
                      showResults
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
                  >
                    {disorder}
                  </button>
                ))}
              </div>

              <div className="min-h-[60px] border-2 border-dashed border-pink-300 rounded-xl p-4 flex items-center justify-center bg-pink-50/50">
                {matches[poem.id] ? (
                  <div
                    className={`w-full py-2 px-4 rounded-lg text-center font-medium ${
                      showResults
                        ? isCorrect(poem.id)
                          ? "bg-green-100 border-2 border-green-400 text-green-800"
                          : "bg-red-100 border-2 border-red-400 text-red-800"
                        : "bg-pink-200 border-2 border-pink-400 text-gray-900"
                    }`}
                  >
                    {matches[poem.id]}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">
                    Click a concept above to match
                  </p>
                )}
              </div>

              {showResults && isCorrect(poem.id) && (
                <div className="mt-6 p-6 bg-green-50 border-2 border-green-300 rounded-xl">
                  <h4
                    className="font-semibold text-green-900 mb-3 text-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {poem.answer}
                  </h4>
                  <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                    {poem.description}
                  </p>
                </div>
              )}

              {showResults && !isCorrect(poem.id) && (
                <div className="mt-6 p-6 bg-red-50 border-2 border-red-300 rounded-xl">
                  <p className="text-red-900 text-sm mb-3">
                    Correct answer:{" "}
                    <span className="font-semibold">{poem.answer}</span>
                  </p>
                  <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                    {poem.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 sticky bottom-8">
          <button
            onClick={checkAnswers}
            disabled={!allMatched}
            className={`px-8 py-4 rounded-xl font-semibold transition-all shadow-lg border-2 ${
              allMatched
                ? "bg-green-500 border-green-600 text-white hover:bg-green-600 cursor-pointer"
                : "bg-gray-300 border-gray-400 text-gray-500 cursor-not-allowed opacity-50"
            }`}
          >
            Check Answers
          </button>
          <button
            onClick={reset}
            className="px-8 py-4 rounded-xl font-semibold bg-pink-200 border-2 border-pink-300 text-gray-800 hover:bg-pink-300 transition-all flex items-center gap-2 shadow-lg"
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
