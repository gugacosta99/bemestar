SELECT 
    "Incidente"."id", 
    "Incidente"."nome", 
    "Incidente"."descricao", 
    "Incidente"."img", 
    "Incidente"."clr", 
    "Incidente"."createdAt", 
    "Incidente"."updatedAt", 
    "instrucoes"."id" AS "instrucoes.id", 
    "instrucoes"."numero" AS "instrucoes.numero", 
    "instrucoes"."descricao" AS "instrucoes.descricao", 
    "instrucoes"."incidenteId" AS "instrucoes.incidenteId", 
    "instrucoes"."createdAt" AS "instrucoes.createdAt", 
    "instrucoes"."updatedAt" AS "instrucoes.updatedAt" 
FROM "Incidentes" AS "Incidente" 
    LEFT OUTER JOIN "Instrucaos" AS "instrucoes" ON "Incidente"."id" = "instrucoes"."incidenteId" WHERE "Incidente"."id" = '1'