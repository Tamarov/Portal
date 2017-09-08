import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	playlist = [];
	
  constructor() {
	  this.playlist = [
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'},
		{kartinka: 'tipo knopka',name: 'Relax', opisanie: 'Для SPA салонов, соляриев, косметологических центров, медицинских учреждений, занятия йогой. Воздействия', styleMusic: 'Lounge, Easy Listening', temp: 'Умеренный и медленный'}
	];
  }

  ngOnInit() {
  }

}
