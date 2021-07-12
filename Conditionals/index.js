//If Else

var status = "approved";

if (status === "approved") {
  console.log("approved");
} else if (status === "pending") {
  //if "approved", then this won't be checked!
  console.log("pending");
} else {
  console.log("denied");
}

console.log(10 < 5 < 1); // 10<5 is false which equivocates to 0 which is less than 1 so true is returned
