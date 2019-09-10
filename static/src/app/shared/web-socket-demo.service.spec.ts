import { TestBed, inject } from '@angular/core/testing';

import { WebSocketDemoService } from './web-socket-demo.service';

describe('WebSocketDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebSocketDemoService]
    });
  });

  it('should be created', inject([WebSocketDemoService], (service: WebSocketDemoService) => {
    expect(service).toBeTruthy();
  }));
});
