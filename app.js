

    let currentPlayer = 1;
    let scores = [0, 0];
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

    function roll() {
      const roll = Math.floor(Math.random() * 6) + 1;
      document.getElementById('dice' + currentPlayer).innerText = diceFaces[roll - 1];
      
      scores[currentPlayer - 1] += roll;
      document.getElementById('score' + currentPlayer).innerText = scores[currentPlayer - 1];
      
      // Switch player
      document.getElementById('p' + currentPlayer).classList.remove('active');
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      document.getElementById('p' + currentPlayer).classList.add('active');
      document.getElementById('turn').innerText = `Player ${currentPlayer}'s turn`;
    }

    function reset() {
      scores = [0, 0];
      currentPlayer = 1;
      document.getElementById('score1').innerText = 0;
      document.getElementById('score2').innerText = 0;
      document.getElementById('dice1').innerText = '🎲';
      document.getElementById('dice2').innerText = '🎲';
      document.getElementById('p1').classList.add('active');
      document.getElementById('p2').classList.remove('active');
      document.getElementById('turn').innerText = "Player 1's turn";
    }