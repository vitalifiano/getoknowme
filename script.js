// get refs to the dom elements and stuff
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

//the beginning of the game basically
function startGame() {
  showTextNode(1); 
}

//display the text as well as options for the text node
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex); // Find the text node by id
  textElement.innerText = textNode.text;


  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  // for each option in the text node, create a button
  textNode.options.forEach(option => {
    const button = document.createElement('button'); 
    button.innerText = option.text; 
    button.classList.add('btn'); 
    button.addEventListener('click', () => selectOption(option)); 
    optionButtonsElement.appendChild(button); 
  });
}

// handle the selection of an option
function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) { 
    return startGame(); 
  }
  showTextNode(nextTextNodeId); 
}

// define the text nodes (the games story content)
const textNodes = [
  {
    id: 1,
    text: 'Get To Know Me :D',
    options: [
      {
        text: 'Do I have experience in GameDev?',
        nextText: 2 
      },
      {
        text: 'What aspects of GameDev am I interested in?',
        nextText: 3 
      },
      {
        text: 'What are my hobbies?',
        nextText: 4 
      },
      {
        text: '-->',
        nextText: 5 
      }
    ]
  },
  {
    id: 2,
    text: 'I do not have experience in GameDev unless you count making a pixelated game map using a program called Tiled.',
    options: [
      {
        text: 'Go Back',
        nextText: 1 
      }
    ]
  },
  {
    id: 3,
    text: 'I am more into storytelling, and stuff like the user gui, terrain-building and yeah.',
    options: [
      {
        text: 'Go Back',
        nextText: 1 
      }
    ]
  },
  {
    id: 4,
    text: 'I like to read manhwa/ga/hua, watch YouTube with food, listen to music and sleep, as well as playing strategic tactic-based games like FM24.',
    options: [
      {
        text: 'Go Back',
        nextText: 1 
      }
    ]
  },
  {
    id: 5,
    text: 'Hi welcome to the next page.',
    options: [
      {
        text: '<--',
        nextText: 1 
      },
      {
        text:'Something unique about me',
        nextText: 6
      },
      {
        text:'Favourite subject & How might it relate to GameDev',
        nextText:7
      },
      {
        text:'If I could create a game what would it be about?',
        nextText: 8
      }
    ]
  },
  {
    id: 6,
    text:'Absolutely nothing.',
    options: [
      {
        text: 'Go Back',
        nextText: 5
      }
    ]
  },
  {
    id: 7,
    text: 'I dont have a favourite subject but if I could say one, it would be Chemistry and how it may relate to GameDev is maybe you are making a game about a chemist or a simulator game. I believe that GameDev relates to everything and everyone.',
    options: [
      {
        text:'Go Back',
        nextText: 5
      }
    ]
  },
  {
    id: 8,
    text: 'I would like to create a simulator open-world kind of game, a style like StarDew Valley with NPCs that have a simple behaviour like those ones in WorldBox but not entirely free behaviour to make it balanced. Still dont know what the purpose or goal of game it would be though.',
    options: [
      {
        text:'Go Back',
        nextText: 5
      }
    ]
  }
];
startGame();
