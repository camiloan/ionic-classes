import { TestBed } from '@angular/core/testing';

import { ProveedorUsersService } from './proveedor-users.service';

describe('ProveedorUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProveedorUsersService = TestBed.get(ProveedorUsersService);
    expect(service).toBeTruthy();
  });
});
