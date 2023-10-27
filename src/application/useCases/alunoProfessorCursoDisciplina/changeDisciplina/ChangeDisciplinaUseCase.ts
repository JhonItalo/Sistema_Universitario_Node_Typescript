import { inject, injectable } from "tsyringe";
import { IAlunoProfessorCursoDisciplinaRepository } from "../../../../domain/repositories/IAlunoProfessorCursoDisciplina";
import { IChangeDisciplina } from "../../../../domain/useCases/alunoProfessorCursoDisciplina/IChangeDisciplina";

@injectable()
class ChangeDisciplinaUseCase implements IChangeDisciplina {
  constructor(
    @inject("AlunoProfessorCursoDisciplinaRepository")
    private alunoProfessorCursoDisciplinaRepository: IAlunoProfessorCursoDisciplinaRepository
  ) {}

  async execute(id_aluno: string, disciplina: number[]): Promise<any> {

    const disciplinasCadastradas = await this.alunoProfessorCursoDisciplinaRepository.findByMany({
      id_aluno,
    });


    const disciplinasCadastradasIdArray = disciplinasCadastradas.map(
      (item) => item.id_professorCursoDisciplina
    );

    console.log('disciplinasCadastradasIdArray', disciplinasCadastradasIdArray)

    let RemoveUnselectedDisciplinas: number[] = disciplinasCadastradasIdArray.filter(
      (num: number) => !disciplina.includes(num)
    );

    console.log('disciplinasCadastradasIdArray', disciplinasCadastradasIdArray)

    RemoveUnselectedDisciplinas = disciplinasCadastradasIdArray;

    console.log('disciplinasCadastradasIdArray', disciplinasCadastradasIdArray)

    const addNewDisciplinas: number[] = disciplina.filter(
      (num: number) => !disciplinasCadastradasIdArray.includes(num)
    );


    return await this.alunoProfessorCursoDisciplinaRepository.changeDisciplina(
      id_aluno,
      RemoveUnselectedDisciplinas,
      addNewDisciplinas
    );
  }
}
export default ChangeDisciplinaUseCase;
