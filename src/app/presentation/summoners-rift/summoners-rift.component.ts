import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-summoners-rift',
  templateUrl: 'summoners-rift.component.html',
  styleUrls: ['./summoners-rift.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SummonersRiftComponent implements OnInit {
  @HostBinding('[@routeTransition]')
  routeTransition = false;

  public registerTeamForm!: FormGroup;

  firstPhaseList!: Array<string>;
  secPhaseList!: Array<string>;
  thirdPhaseList!: Array<string>;
  fourthPhaseList!: Array<string>;
  fifthPhaseList!: Array<string>;

  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  counter4 = 0;

  alertMessage = '';

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.startForm();
  }

  initPhasesList() {}

  isPlayable() {
    let size = this.firstPhaseList.length;
    //Verify is its a power of 2
    if (Math.log2(size) % 1 === 0) {
      return true;
    } else {
      return false;
    }
  }

  startForm() {
    //initialize first phase list
    this.firstPhaseList = [];
    this.registerTeamForm = this.fb.group({
      teamsName: ['', Validators.required],
    });
  }

  removeTeamFromList(index: number) {
    if (this.secPhaseList.length > 0) {
      this.alertMessage = 'You cannot remove teams after the tournament start';
      setTimeout(() => (this.alertMessage = ''), 3000);
      return;
    } else {
      return this.firstPhaseList.splice(index, 1);
    }
  }

  addTeamToList() {
    //initialize second phase list
    this.secPhaseList = [];
    let team = this.registerTeamForm.value.teamsName;
    if (this.firstPhaseList.includes(team)) {
      this.alertMessage = 'This team is alredy registerd';
      setTimeout(() => (this.alertMessage = ''), 3000);
      return;
    } else if (this.firstPhaseList.length === 16) {
      this.alertMessage = '16 teams is the number limit of registered teams for this championship';
      setTimeout(() => (this.alertMessage = ''), 3000);
      return;
    } else {
      return this.firstPhaseList.push(team);
    }
  }

  addWinnerPhase1(winner1: any) {
    if (!this.isPlayable()) {
      this.alertMessage =
        'It is necessery that the number of teams playing is a power of 2, plase add or delete teams';
      setTimeout(() => (this.alertMessage = ''), 3000);
      return;
    } else {
      if (this.counter1 < this.firstPhaseList.length / 2) {
        if (this.secPhaseList.includes(winner1)) {
          this.alertMessage = 'This team is alredy in the next phase';
          setTimeout(() => (this.alertMessage = ''), 3000);
        } else {
          this.secPhaseList.push(winner1);
          this.counter1++;
          if (this.firstPhaseList.length === 2) {
            alert('The team ' + winner1 + ' is the Summoners Rift champion');
          }
        }
      } else {
        this.alertMessage = 'This first phase is ended';
        setTimeout(() => (this.alertMessage = ''), 3000);
      }
      //initialize thrid phase list
      if (this.firstPhaseList.length > 2) {
        this.thirdPhaseList = [];
      }
    }
  }

  addWinnerPhase2(winner2: any) {
    if (this.counter1 < this.firstPhaseList.length / 2) {
      this.alertMessage = 'To beggin the next phase please finish the current one!';
      setTimeout(() => (this.alertMessage = ''), 3000);
      return;
    } else {
      if (this.counter2 < this.secPhaseList.length / 2) {
        if (this.thirdPhaseList.includes(winner2)) {
          this.alertMessage = 'This team is alredy in the next phase';
          setTimeout(() => (this.alertMessage = ''), 3000);
        } else if (this.firstPhaseList.length == 2) {
          return;
        } else {
          this.thirdPhaseList.push(winner2);
          this.counter2++;
          if (this.secPhaseList.length === 2) {
            alert('The team ' + winner2 + ' is the Summoners Rift champion');
          }
        }
      } else {
        this.alertMessage = 'This sencond phase is ended';
        setTimeout(() => (this.alertMessage = ''), 3000);
      }
    }
    //initialize fourth phase list
    if (this.secPhaseList.length > 2) {
      this.fourthPhaseList = [];
    }
  }

  addWinnerPhase3(winner3: any) {
    if (this.counter2 < this.secPhaseList.length / 2) {
      this.alertMessage = 'To beggin the next phase please finish the current one!';
      setTimeout(() => (this.alertMessage = ''), 3000);
      return;
    } else {
      if (this.counter3 < this.thirdPhaseList.length / 2) {
        if (this.fourthPhaseList.includes(winner3)) {
          this.alertMessage = 'This team is alredy in the next phase';
          setTimeout(() => (this.alertMessage = ''), 3000);
        } else if (this.secPhaseList.length == 2) {
          return;
        } else {
          this.fourthPhaseList.push(winner3);
          this.counter3++;
          if (this.thirdPhaseList.length === 2) {
            alert('The team ' + winner3 + ' is the Summoners Rift champion');
          }
        }
      } else {
        this.alertMessage = 'This third phase is ended';
        setTimeout(() => (this.alertMessage = ''), 3000);
      }
    }
    //initialize fifth phase list
    if (this.thirdPhaseList.length > 2) {
      this.fifthPhaseList = [];
    }
  }

  addWinnerPhase4(winner4: any) {
    if (this.counter3 < this.thirdPhaseList.length / 2) {
      this.alertMessage = 'To beggin the next phase please finish the current one!';
      setTimeout(() => (this.alertMessage = ''), 3000);
      return;
    } else {
      if (this.counter4 < this.fourthPhaseList.length / 2) {
        if (this.fifthPhaseList.includes(winner4)) {
          this.alertMessage = 'This team is alredy in the next phase';
          setTimeout(() => (this.alertMessage = ''), 3000);
        } else if (this.thirdPhaseList.length == 2) {
          return;
        } else {
          this.fifthPhaseList.push(winner4);
          this.counter4++;
          alert('The team ' + winner4 + ' is the Summoners Rift champion');
        }
      }
    }
  }
}
