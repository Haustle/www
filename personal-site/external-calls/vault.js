
// soon i want this to run off of notion, or some page that can fetch this sort of information
const bookmarks = [
    {
        title : "The Secret of Walt Disney's Creativity",
        category : 'Read',
        date: '07/01',
        url: 'https://lateralaction.com/articles/walt-disney/',
        comment: ''
    },
    {
        title: "To anyone Who Thinks They're Falling Behind",
        category: 'Read',
        date: '07/01',
        url: 'https://medium.com/@jamievaron/to-anyone-who-thinks-they-re-falling-behind-f194afde9148',
        comment: 'Encouraging to anyone comparing themselves to others'
    },
    {
        title: "True Sight: The International 2019 Finals",
        category: 'Doc',
        date: '07/01',
        url: 'https://www.youtube.com/watch?v=ceQ2XFS1tUo',
        comment: 'One of the best representations and insights of esports'
    },
    {
        title: "HIBT – Dyson w/ James Dyson",
        category: 'Podcast',
        date: '07/01',
        url: 'https://open.spotify.com/episode/28mMmJrzlqDDEnUMMtcLtZ?si=AQkCS3PlQx2_LdfuLgv5NA',
        comment: 'Amazing inventor and good talk on to follow your dreams'
    },
    {
        title: "The Desktop Metaphor Must Die",
        category: 'Read',
        date: '07/01',
        url: 'https://uxdesign.cc/the-desktop-metaphor-must-die-676fbb34afdb',
        comment: 'Food for thought when designing, and practicality'
    },
    

];
    
        
    

export function getBookmarks() {
    return bookmarks;
    
}