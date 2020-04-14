import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities-list',
  templateUrl: './opportunities-list.component.html',
  styleUrls: ['./opportunities-list.component.css']
})
export class OpportunitiesListComponent implements OnInit {
  
    opportunities = [
    {
      title: 'Студент',
      list: ['Просмотр базы с предприятиями','Написание отзыва по опыту работы на предприятии','Создание заявки  на задачу от предприятия и дальнейшее отслеживание  статуса заявки ']
    },
    {
      title: 'Предприятие',
      list: ['Просмотр базы со студентами','Создание задачи','Работа с заявками от студентов','Написание отзыва  на студента с возможностью поставить оценку']
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
