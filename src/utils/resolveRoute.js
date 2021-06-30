const resolveRoute = (route) => {
    if (resolveRoute.length <= 3) {
        let validRoute = route === '/' ?
        route:'/:id';
        
        return validRoute
    };
}

export default resolveRoute;