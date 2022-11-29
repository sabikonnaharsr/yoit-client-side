import { useEffect, useState } from "react"


const useAdmin = email => {
    const [userType, setUserType] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    
               
                    setUserType(data);
                    setIsUserLoading(false);
                })
        }
    }, [email])
    
    return [userType, isUserLoading]
}

export default useAdmin;