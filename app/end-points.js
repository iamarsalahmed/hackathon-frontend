export const auth = {
    signUp: '/users/register',
    login: '/users/login'
}

export const dashboard = {
    logs: '/dashboard/logs', //get
    insights: '/dashboard/insights', //get
    searchUser: '/dashboard/searchUser', //get
    getAllUsers: '/dashboard/getAllUsers', //get
}

export const beneficiary = {
    createBeneficiary: '/beneficiaries', //post
    getBeneficiaryByCNIC: (cnic) => `/beneficiaries/${cnic}`, //get
    updateBeneficiaryStatus: (cnic, status) => `/beneficiaries/${cnic}/${status}`, //put
    getAllBeneficiaries: (cnic) => `/`, //get
}

export const department = {
    createDepartment: '/departments', //post
    getAllDepartments: '/departments', //get
    createDepartment: (id, name) => `/departments/${id}/${name}`, //put

}

export const token = {
    createToken: '/tokens' , //post
    getTokenDetails: (tokenId) => `/tokens/${tokenId}` , //post
    cupdateTokenStatus: (tokenId, status) => `/tokens/${tokenId}/${status}` , //put
    getAllTokens: '/tokens' , //get
}