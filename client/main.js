const baseURL = "http://localhost:4000";
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const luckyBtn = document.getElementById("luckyButton");
const motivatedBtn = document.getElementById("getMotivated");
const motivationBin = document.getElementById("displayMotivations");
const addForm = document.getElementById("addForm");
const addInput = document.getElementById("addInput");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios
    .get("http://localhost:4000/api/fortune")
    .then((res) => {
      const data = res.data;
      alert(data);

      // alert(data);
    })
    .catch((err) => console.log(err));
};

const getLuckyNumber = () => {
  axios.get(`http://localhost:4000/api/luckynumber`).then((res) => {
    const data = res.data;
    console.log(data);
    alert(data);
  });
};

const getMotivated = () => {
  axios
    .get(`${baseURL}/api/motivated/`)
    .then((res) => {
      console.log(res.data);
      const motivations = res.data;
      motivationBin.innerHTML = "";

      for (let i = 0; i < motivations.length; i++) {
        let newMotivation = document.createElement("li");
        newMotivation.textContent = motivations[i];
        motivationBin.appendChild(newMotivation);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const addNewItem = (event) => {
  //so form doesn't run automatically when page loads in
  event.preventDefault();

  let bodyObj = {
    item: addInput.value,
  };
  axios
    .post(`${baseURL}/api/addMotivation`, bodyObj)
    .then((res) => {
      console.log(res.data);
      const motivations = res.data;
      motivationBin.innerHTML = "";

      for (let i = 0; i < motivations.length; i++) {
        let newMotivation = document.createElement("li");
        newMotivation.textContent = motivations[i];
        motivationBin.appendChild(newMotivation);
      }
      addInput.value = "";
    })
    .catch((err) => {
      console.log(err);
    });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
luckyBtn.addEventListener("click", getLuckyNumber);
getMotivatedBtn.addEventListener("click", getMotivated);
addForm.addEventListener("submit", addNewItem);
