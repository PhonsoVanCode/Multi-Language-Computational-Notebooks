let participantID;

// common
document.addEventListener("DOMContentLoaded", function() {
  participantID = new URLSearchParams(window.location.search).get("ParticipantID")
});

// index.html
document.addEventListener("DOMContentLoaded", function() {

    const participantID = document.getElementById('participantID');
    const surveyButton1 = document.getElementById('surveyButton1');
    const surveyLink1 = document.getElementById('surveyLink1');

    if (surveyButton1 && surveyLink1 && participantID) {
        surveyButton1.onclick = function() {
            const id = participantID.value.trim();
            if (id) {
                const link = `https://migroup.qualtrics.com/jfe/form/SV_9QQGJz15kcDcfGe?ParticipantID=${encodeURIComponent(id)}`;
                surveyLink1.href = link;
                surveyLink1.click();
            } else {
                alert('Please insert your ParticipantID');
            }
        };
    } 
});

// 1.html
document.addEventListener("DOMContentLoaded", function() {

    const surveyButton2 = document.getElementById('surveyButton2');
    const surveyLink2 = document.getElementById('surveyLink2');

    surveyButton2.onclick = function() {
        surveyLink2.href = `https://migroup.qualtrics.com/jfe/form/SV_a3pk2o0B2n1lAuG?ParticipantID=${encodeURIComponent(participantID)}`;
        surveyLink2.click();
    } 
    
});

// 2.html
document.addEventListener("DOMContentLoaded", function() {

    const surveyButton3 = document.getElementById('surveyButton3');
    const surveyLink3 = document.getElementById('surveyLink3');

    surveyButton3.onclick = function() {
        surveyLink3.href = `https://migroup.qualtrics.com/jfe/form/SV_0j2gO9KztrHKJ0O?ParticipantID=${encodeURIComponent(participantID)}`;
        surveyLink3.click();
    } 
    
});

// 3.html
document.addEventListener("DOMContentLoaded", function() {

    const surveyButton4 = document.getElementById('surveyButton4');
    const surveyLink4 = document.getElementById('surveyLink4');

    surveyButton4.onclick = function() {
        surveyLink4.href = `https://migroup.qualtrics.com/jfe/form/SV_9X2uoov67AvuDf8?ParticipantID=${encodeURIComponent(participantID)}`;
        surveyLink4.click();
    } 
    
});

document.addEventListener('DOMContentLoaded', function () {
  const timerLabel = document.getElementById('timerLabel');
  const timerBar = document.getElementById('timerBar');
  const totalSeconds = 15 * 60;
  let remaining = totalSeconds;

  function updateTimer() {
    const min = Math.floor(remaining / 60);
    const sec = remaining % 60;
    timerLabel.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    timerBar.style.width = `${(remaining / totalSeconds) * 100}%`;
    if (remaining > 0) {
      remaining--;
    } else {
      clearInterval(timerInterval);
      timerLabel.textContent = "Time's up!";
      timerBar.style.width = '0%';
    }
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
});