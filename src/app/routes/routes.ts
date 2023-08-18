interface rout {
    route : string;
    subRoutes? : Map<string, rout>;
}

export const Routes = new Map<string, rout>([
    ["Home",{
        route : "/"
    }],
    ["Flag", {
        route : "/layout/flag"
    }]
])
