let userRole = "employee"
let accessLevel;

if (userRole === "employee") {
    accessLevel = "Dietary Services"
} else if (userRole === "Enrolled Member") {
    accessLevel = "Dietary Services and one-on-one interaction wih dietician"
} else if (userRole === "subscriber") {
    accessLevel = "Dietary Services partial Service"
}else {
    accessLevel = "No access granted"
} 

