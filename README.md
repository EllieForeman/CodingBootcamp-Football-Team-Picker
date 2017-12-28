# Football Team Selector 

### The brief 

The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names.

Its up to you how you implement this, with JavaScript, PHP, as a web page, or as an app.

Advanced features might include:
<ul>
    <li>support for n-a-side, where a list of any length can be split into two teams</li>
    <li>support for balancing of the teams, where some measure of each player's strength is used to allocate teams fairly.</li>

---

### My Thought Process

Use React-Reux.

**What is the goal of the website?**
- Randomly select teams from a list of names 

**Target audience?**
- People who want to make 5 aside football teams
- Possibly on the pitch
- Need quick access to webapp 

**User Journey**
- Add players to a list
- Select 'Pick teams' to generate two seperate teams from the list
- Edit player names in the generated list
- Be able to clear the list of players to start again
- Re-shuffle list for another randomly selected team from same players

#### Challenges

**Sorting players by skill: question of UX regarding ratings:**

1) *numerical rating* 
- out of 5/10?
- problems of numerical ratings - too wide a choice can be stressful. Issue of mapping this kind of rating onto past experiences - school/uni exams where 5/10 or 50/100 is bad rather than regarded as average.

2) *The Likert Scale type of thing:*
- by words - good/intermediate/Fair (problem of wording - bit harsh to rate a player as 'poor'/'bad'/'abysmal'! - easier to rate numberically).

3) *graphic representation*
- select out of 5 stars 

---

### Notes from researching similar apps

**what works well:**

- Having the list of players you have entered still displayed when the list is split into teams
- Simple skills selector - ex. out of 5</li>


**what doesn't work so well:**
- forced to enter unnecessary imputs - such as team name
- skill level selectors which are hard to choose - ex. out of 100, even out of 10 
- Clears names when you click to edit one player
