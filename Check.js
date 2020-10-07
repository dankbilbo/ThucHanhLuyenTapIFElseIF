function check()
{
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // let result = document.getElementById("result").innerHTML;
    if(userName == "Admin")
    {
        if(password == "TheMaster")
        {
            document.getElementById("result").innerHTML = "Welcome back master!! i'm ready to be enslaved by u one more time";
        }
            else if(password == "")
            {
                document.getElementById("result").innerHTML = "Canceled haha";
            }
                else
                    {
                        document.getElementById("result").innerHTML = "Wrong password";
                    }
    }
        else if(userName == "")
        {
            document.getElementById("result").innerHTML = "I don't know u man";
        }
            else
                {
                    document.getElementById("result").innerHTML = "I don't know u man";
                }

}