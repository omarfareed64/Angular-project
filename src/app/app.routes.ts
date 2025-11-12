import { Routes } from '@angular/router';
import { Homepage } from './Pages/homepage/homepage';
import { Mainlayout } from './Components/layout/mainlayout/mainlayout';
import { PrivateJetsPage } from './Pages/private-jets-page/private-jets-page';
import { LoginPage } from './Pages/login-page/login-page';
import { SignUpPage } from './Pages/sign-up-page/sign-up-page';
import { StaysPage } from './Pages/stays-page/stays-page';
import { FlightsPage } from './Pages/flights-page/flights-page';
import { ToursPage } from './Pages/tours-page/tours-page';
import { TravelPage } from './Pages/travel-page/travel-page';
import { CarsPage } from './Pages/cars-page/cars-page';

export const routes: Routes = [
    {
        path: "", component: Mainlayout, children: [
            { path: "home", component: Homepage },
            { path: "login", component: LoginPage },
            { path: "signup", component: SignUpPage },
            { path: "stays", component: StaysPage },
            { path: "flights", component: FlightsPage },
            { path: "tours", component: ToursPage },
            { path: "cars", component: CarsPage },
            { path: "private/jets", component: PrivateJetsPage },
            { path: "travel", component: TravelPage },
            { path: '**', redirectTo: 'home' }
        ]
    },

    { path: '**', redirectTo: '' },

];
