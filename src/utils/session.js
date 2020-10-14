export default function manageSession() {
  let totalTabs;

  window.onload = function (e) {
    let token = sessionStorage.getItem("token");
    console.log({ token });
    if (token !== null) {
      localStorage.setItem("token", token);
      sessionStorage.removeItem("token");
    }

    if (localStorage.getItem("count") === null) {
      totalTabs = 0;
    } else {
      totalTabs = parseInt(localStorage.getItem("count"));
    }
    totalTabs++;
    localStorage.setItem("count", "" + totalTabs);
  };

  window.onbeforeunload = function (e) {
    if (localStorage.getItem("count") === null) {
      totalTabs = 1;
    } else {
      totalTabs = parseInt(localStorage.getItem("count"));
    }
    totalTabs--;
    localStorage.setItem("count", "" + totalTabs);

    if (totalTabs < 1) {
      let token = localStorage.getItem("token");
      console.log({ token });
      if (token !== null) {
        sessionStorage.setItem("token", token);
      }
    }

    localStorage.removeItem("token");
  };
}
