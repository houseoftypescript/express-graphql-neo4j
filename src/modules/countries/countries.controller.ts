import { Controller, Get, Route, Tags } from 'tsoa';
import { getCountries } from './countries.service';
import { Country } from './countries.types';

@Tags('Countries')
@Route('/countries')
export class CountriesController extends Controller {
  @Get()
  async getCountries(): Promise<Country[]> {
    return getCountries();
  }
}
