document.addEventListener("DOMContentLoaded", function() {

    participantID = new URLSearchParams(window.location.search).get("participant_id");
  
    state = new URLSearchParams(window.location.search).get("state");

    const surveyButton = document.getElementById('surveyButton');
    const surveyLink = document.getElementById('surveyLink');

    const taskType = participantID.substring(0, 2);
    const extensionType = participantID.substring(2, 4);

    const surveyLinkWithoutExtension = `https://migroup.qualtrics.com/jfe/form/SV_a3pk2o0B2n1lAuG?participant_id=${encodeURIComponent(participantID)}`;
    const surveyLinkWithExtension = `https://migroup.qualtrics.com/jfe/form/SV_0j2gO9KztrHKJ0O?participant_id=${encodeURIComponent(participantID)}`;
    const surveyLinkPost = `https://migroup.qualtrics.com/jfe/form/SV_9X2uoov67AvuDf8?participant_id=${encodeURIComponent(participantID)}`;

    if (!participantID || participantID.length < 4) {
        alert("Ungültige Teilnehmer-ID.");
     }

    switch (state) {

        case "from_pre":
            state = 'doTaskOne';
        break;

        case "from_withoutExtension":
            if(extensionType==='OW') {
                state = 'doTaskTwo';
            }
            if(extensionType==='WO') {
                state = 'post';
            }
        break;

        case "from_withExtension":
            if(extensionType==='WO') {
                state = 'doTaskTwo';
            }
            if(extensionType==='OW') {
                state = 'post';
            }        
        break;
    }

    switch (state) {
        case "doTaskOne":
            if(extensionType==='OW') {
                document.getElementById('withoutExtension').style.display = 'block';
                surveyLink.href = surveyLinkWithoutExtension;
            }
            if(extensionType==='WO') {
                document.getElementById('withExtension').style.display = 'block';
                surveyLink.href = surveyLinkWithExtension;
            }  
            
            document.getElementById('timerContainer').style.display = 'block';
            
            if(taskType==='AB') {
                document.getElementById('taskA').style.display = 'block';
            }
            if(taskType==='BA') {
                document.getElementById('taskB').style.display = 'block';
            }    
        break;

        case "doTaskTwo":
            if(extensionType==='OW') {
                document.getElementById('withExtension').style.display = 'block';
                surveyLink.href = surveyLinkWithExtension;
            }
            if(extensionType==='WO') {
                document.getElementById('withoutExtension').style.display = 'block';
                surveyLink.href = surveyLinkWithoutExtension;
            }

            document.getElementById('timer').style.display = 'block';

            if(taskType==='AB') {
                document.getElementById('taskB').style.display = 'block';
            }
            if(taskType==='BA') {
                document.getElementById('taskA').style.display = 'block';
            }    
        break;

        case "post":
            document.getElementById('post').style.display = 'block';
                surveyLink.href = surveyLinkPost;
        break;
    }

    surveyButton.onclick = function() {
        surveyLink.click();
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
            document.getElementById('taskA').style.display = 'none';
            document.getElementById('taskB').style.display = 'none';
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
});
