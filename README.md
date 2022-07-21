import { UniqueServiceId } from "./unique-id.service";

describe(UniqueServiceId.name, () => {//artefato que queremos testar, pode ser apresentado entre '' ou .name
    
    //antes de executar os its, sempre um serivece novo
    let service: UniqueServiceId = null;
    beforeEach(() => {
        service = new UniqueServiceId();
    });

    it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {//condição que queremos testar
        //`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix` -> outra ideia para nomear
        //padrão para o it
        const service = new UniqueServiceId()
        const id = service.generateUniqueIdWithPrefix('app') //passado app, porem pode ser qualquer um
        expect(id).toContain('app-')
    });

    it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate id when called multiple times`, () => {
        //codigo sem elegancia
        const service = new UniqueServiceId();
        const firstId = service.generateUniqueIdWithPrefix('app');
        const secondId = service.generateUniqueIdWithPrefix('app');

        expect(firstId).not.toBe(secondId);
  });

    it(`#${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate id when called multiple times`, () => {
        //forma bonita
        const ids = new Set(); // não aceita elemento duplicados

        for (let i = 0; i < 50; i++) {
        ids.add(service.generateUniqueIdWithPrefix('app'));
        }

        expect(ids.size).toBe(50);
  });
});
