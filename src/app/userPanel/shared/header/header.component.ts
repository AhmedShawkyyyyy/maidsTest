// header.component.ts
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddUserComponent } from '../../home/add-user/add-user.component';
import { openpopup } from '../../store/User.Action';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() searchTextChange: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('searchInput') searchInputElement!: ElementRef<HTMLInputElement>;

  constructor(private dialog: MatDialog, private store: Store) {}

  onSearchTextChange() {
    const inputValue = this.searchInputElement.nativeElement.value;
    const valueofthenumber = +inputValue;
    this.searchTextChange.emit(valueofthenumber);
  }

  FunctionAdd() {
    this.OpenPopup(0, 'Create New User');
  }

  OpenPopup(code: number, title: string) {
    this.store.dispatch(openpopup());
    this.dialog.open(AddUserComponent, {
      width: '60%',
      height: '70%',
      enterAnimationDuration: '700ms',
      exitAnimationDuration: '700ms',
      data: {
        code: code,
        title: title,
      },
    });
    console.log(code);
  }
}
