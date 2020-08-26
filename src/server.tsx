import { Server, Response, Model, Factory, RestSerializer   } from 'miragejs';

export function createServer() {
    let server = new Server({
        models: {
            todo: Model,
            topic: Model
        },
        factories: {            
            todo : Factory.extend({
                title() {
                    let values: Array<string> = 'Typescript .NET CSS'.split(' ');                    
                    return values[Math.floor(Math.random() * values.length)];
                },

                text() {
                    let values: Array<string> = 'React Redux Thunk Bootstrap C#'.split(' ');                    
                    return values[Math.floor(Math.random() * values.length)];
                },
                completed: false
            }),
            topic: Factory.extend({
                title() {
                    let values: Array<string> = ['Foreign', 'Government Agencies/Legislatures', 'Economy', 'Crime',
                        'Disasters/Accidents', 'Business', 'Health/Medicine', 'Sports', 'Lifestyle', 'Education',
                        'Environment', 'Science/Technology', 'Celebrity/Entertainment', 'Transportation', 'Religion',
                        'Immigration', 'Court/Legal System'];
                    return values[Math.floor(Math.random() * values.length)];
                },
                description() {
                    let values: Array<string> = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Nam si amitti vita  beata potest, beata esse non potest. Eadem fortitudinis ratio reperietur. Duo Reges: constructio interrete. Omnium enim rerum principia parva sunt, sed suis progressionibus usa augentur nec sine causa; At enim, qua in vita est aliquid mali, ea beata esse non potest. Sed ad illum redeo.`.trim().split(' ');
                    let shuffled = values.map((a) => ({ sort: Math.random(), value: a }))
                        .sort((a, b) => a.sort - b.sort)
                        .map((a) => a.value);
                    return shuffled.slice(0, 30).join(' ');
                }
            })
        },
        serializers: {
           application: RestSerializer      
        },
        routes() {
            this.namespace = 'api';
            this.timing = 5000;

            this.post("/items", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                delete attrs.id;
                let result = schema.create('todo', attrs);

                return new Response(200, {}, result);
            });

            this.get('/items', (schema, request) => {
                return schema.all('todo')
            }, { timing: 4000 });

            this.get('/items/:id', (schema, request) => {
                let id = request.params.id
                let item = schema.find('todo', id);
                let headers = {};
                let data = { errors: ["Server did not respond"] };
                //return schema.find('todo', id) ?? [];
                if (item != null) {
                    return item;
                }
                return new Response(500, headers, data);
            });

            this.patch("/items/:id", (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody)
                let id = request.params.id;
                let item = schema.find('todo', id);
                let headers = {};
                let data = { errors: ["Server did not respond"] };

                if (item != null) {
                    item.update(newAttrs);
                    return new Response(200, headers, item);
                }
                return new Response(500, headers, data);                
            })

            this.delete("/items/:id", (schema, request) => {
                let id = request.params.id;
                let item = schema.find('todo', id);
                let headers = {};
                let data = { errors: ["Server did not respond"] };

                if (item != null) {
                    item.destroy();
                    return new Response(200, headers, item);
                }
                return new Response(500, headers, data);
            })

            this.get('/topics', (schema, request) => {
                return schema.all('topic')
            }, { timing: 4000 });
        },

        seeds(server) {
            server.createList('topic', 3);
            server.createList('todo', 3);
        }
    });

    return server;

}