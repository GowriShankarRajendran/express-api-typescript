import express, { Router, Request, Response, NextFunction } from 'express';
import { Country, State, City, ICountry, IState, ICity } from 'country-state-city';

export const locationRouter: Router = express.Router();

locationRouter.get("/country", (req: Request, res: Response, next: NextFunction) => {
    let getCountryList: ICountry[] = Country.getAllCountries();
    res.status(200).json(getCountryList);
});

locationRouter.get("/state/:countryCode", (req: Request, res: Response, next: NextFunction) => {
    let getCountryCode: string = req.params.countryCode;
    let getStateList: IState[] = State.getStatesOfCountry(getCountryCode);
    res.status(200).json(getStateList);
});

locationRouter.get("/city/:countryCode/:stateCode", (req: Request, res: Response, next: NextFunction) => {
    let getCountryCode: string = req.params.countryCode;
    let getStateCode: string = req.params.stateCode;
    let getCityList: ICity[] = City.getCitiesOfState(getCountryCode, getStateCode);
    res.status(200).json(getCityList);
});