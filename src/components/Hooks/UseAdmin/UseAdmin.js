import { useEffect, useState } from "react"


const useAdmin = email => {
    const [isAdmin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://byte-code-velocity.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    
               
                    setAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    
    return [isAdmin, isAdminLoading]
}

export default useAdmin;