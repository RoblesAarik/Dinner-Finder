console.log("Works");
$(() => {
  $.ajax({
    url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772",
  }).then(
    data => {
      console.log(data);
      $("#recipe1").append(data.idMeal);
    },
    () => {
      console.log("bad");
    }
  );
});
