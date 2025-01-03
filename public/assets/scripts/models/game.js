class Game
{
    setPlayed_at(played_at)
    {
        //validate if played_at is a date
        if(isNaN(Date.parse(played_at)))
        {
            throw new Error('Invalid played_at date');
        }
        this.played_at = this.formatDate(played_at);
    }

    setResult(result)
    {
        //validate result which should be 'X', 'O' or 'Draw'
        const validResults = ['X', 'O', 'Draw'];
        if(!validResults.includes(result))
        {
            throw new Error('Invalid result. It must be "X", "O", or "Draw"');
        }

        
        this.result = result;
    }

    formatDate(date) 
    {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    displayInfo()
    {
        console.log(`Game played on ${this.played_at}`);
        console.log(`Result : ${this.result}`);
    }

    async save()
    {
        try 
        {
            const response = await fetch
                            (
                                '/api/game/create', 
                                {
                                    method: 'POST', 
                                    headers: 
                                    { 
                                        'Content-Type': 'application/json', 
                                    }, 
                                    body: JSON.stringify
                                          (
                                            { 
                                                played_at: this.played_at, 
                                                result: this.result, 
                                            }
                                          ), 
                                }
                            );
            if (response.status !== 201)
            { 
                throw new Error('Failed to save the game'); 
            } 
            const data = await response.json(); 
            console.log('Game saved:', data);
        } 
        catch (error) 
        { 
            console.error('Error saving the game:', error); 
        }  
    }

    /*getLeadboard()
    {
        fetch('/api/game/leadboard')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Leaderboard Data:', data.data);
          return data.data;
          // You can use the leaderboard data, for example, render it on the page
          // Example: renderLeaderboard(data);
        })
        .catch(error => {
          console.error('Error fetching leaderboard:', error);
        });
    }*/

    async getLeadboard()
    {
        try 
        {
            const response = await fetch
                            (
                                '/api/game/leadboard', 
                                {
                                    method: 'GET', 
                                    headers: 
                                    { 
                                        'Content-Type': 'application/json', 
                                    }
                                }
                            );
            if (response.status !== 200)
            { 
                throw new Error('Failed to retrive the list'); 
            } 
            const data = await response.json(); 
            return data.data;
        } 
        catch (error) 
        {
            console.error('Error saving the game:', error); 
        }
    }
}