document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const state = params.get("state");
    console.log("State parameter:", state);
    
  });
  

document.addEventListener("DOMContentLoaded", function() {
    const startSurveyBtn = document.getElementById('startSurveyBtn');
    const participantID = document.getElementById('participantID');
    const surveyLink = document.getElementById('surveyLink');

    if (startSurveyBtn && participantID && surveyLink) {
        startSurveyBtn.onclick = function() {
            const id = participantID.value.trim();
            if (id) {
                const link = `https://migroup.qualtrics.com/jfe/form/SV_9QQGJz15kcDcfGe?ParticipantID=${encodeURIComponent(id)}`;
                surveyLink.href = link;
                surveyLink.click();
            } else {
                alert('Please insert your ParticipantID');
            }
        };
    } 
});
