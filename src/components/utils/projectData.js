
// picture imports for projects page
import techblogpic from '../../images/techblogscreenshot.png';
import woofpic from '../../images/woofscreenshot2.png';
import emptrackerpic from '../../images/employeetracker.png';
import notetakerpic from '../../images/notetaker.png';
import lotsothoughtspic from '../../images/lotsothoughtsscreenshot.jpg';
import marvelpic from '../../images/marvelquizscreenshot2.png';

const projects = [{
    title: 'Tech Blog via MVC',
    picture: `${techblogpic}`,
    description: 'Functioning blog application using MVC (Model-View-Controller) practices.',
    git: 'https://github.com/joeytmab/Tech-Blog-via-MVC-Template',
    demo: 'https://protected-shelf-89521.herokuapp.com/'
},
{
    title: 'W.O.O.F.!',
    picture: `${woofpic}`,
    description: 'We Out of Food! Web-based app for locating dog-friendly eateries.',
    git: 'https://github.com/joeytmab/Restaurant-Picker-Project',
    demo: 'https://joeytmab.github.io/Restaurant-Picker-Project/'
},
{
    title: 'Employee Monitor',
    picture: `${emptrackerpic}`,
    description: 'MySQL-based digital database structured for employee parameters.',
    git: 'https://github.com/joeytmab/Employee-Monitor'
},
{
    title: 'Notetaker3000',
    picture: `${notetakerpic}`,
    description: 'Note taking application using Express.JS for back-end functionality.',
    git: 'https://github.com/joeytmab/NoteTaker3000',
    demo: 'https://boiling-fortress-67810.herokuapp.com/'
},
{
    title: 'Lotso Thoughts Social Media',
    picture: `${lotsothoughtspic}`,
    description: 'Constructed backend of an API-powered social media environment.',
    git: 'https://github.com/monacoglynn/weather-tracker'
},
{
    title: 'MCU Trivia Quiz',
    picture: `${marvelpic}`,
    description: 'Test your Marvel Cinematic Universe knowledge! VERY CHALLENGING.',
    git: 'https://github.com/joeytmab/MCU-Trivia-Quiz-With-Web-APIs',
    demo: 'https://joeytmab.github.io/MCU-Trivia-Quiz-With-Web-APIs/'
}]


export default projects;