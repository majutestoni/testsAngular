import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { UniqueServiceId } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss'],
})
export class LikeWidgetComponent implements OnInit {
  @Output() public liked = new EventEmitter<void>();
  @Input() public likes = 0;
  @Input() public id = null;

  public fonts = {
    faThumbsUp,
  };

  constructor(private uniqueServiceId: UniqueServiceId) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.uniqueServiceId.generateUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void {
    this.liked.emit();
  }
}
